import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import EventPage, { loader as eventLoader } from "./page/EventPage.jsx";
import EventDetailPage, { loader as eventDetailLoader, action as actionDetailAction } from "./page/EventDetailPage.jsx";
import NewEventPage from "./page/NewEventPage.jsx";
import EditEventPage from "./page/EditEventPage.jsx";
import Root from "./page/Root.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
import EventRoot from "./page/EventRoot.jsx";
import Authentication, { action as authAction } from "./page/Authentication.jsx";
import { action as manipulateEventAction } from "./components/EventForm.js";
import NewsletterPage, { action as newsLetterAction } from "./page/Newsletter.jsx";
import { action as logoutAction } from "./page/Logout.js";
import { tokenLoader, checkAuthLoader } from "./util/Auth.js";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={tokenLoader} id="root">
    <Route index element={<HomePage />} />

    <Route path="events" element={<EventRoot />}>
      <Route index element={<EventPage />} loader={eventLoader} />
      <Route path="new" element={<NewEventPage />} action={manipulateEventAction} loader={checkAuthLoader} />
      <Route path=":id" loader={eventDetailLoader} id="event-detail">
        <Route index element={<EventDetailPage />} action={actionDetailAction} />
        <Route path="edit" element={<EditEventPage />} action={manipulateEventAction} loader={checkAuthLoader} />
      </Route>
    </Route>
    <Route path="auth" element={<Authentication />} action={authAction} />
    <Route path="newsletter" element={<NewsletterPage />} action={newsLetterAction} />
    <Route path="logout" action={logoutAction} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
