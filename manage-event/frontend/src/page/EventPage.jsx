import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "could not fetched the data" }), { status: 500 });
    throw json({ message: "could not fetched the data" }, { status: 500 });
  }

  const resData = await response.json();

  return resData.events;
}

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
}

export default EventsPage;
