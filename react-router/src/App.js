import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Root";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// const routeDefinitions = createRoutesFromElements(
//   <Route errorElement={<ErrorPage />}>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />}></Route>
//       <Route path="products" element={<Products />} />
//       <Route path="products/:productId" element={<ProductDetail />} />
//     </Route>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
