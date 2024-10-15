import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
const AppComponent = React.lazy(() => import("./App"));
const Strings = React.lazy(() => import("./pages/Strings"));

import NotFound from "./pages/NotFound";
// import Strings from "./pages/Strings";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppComponent />
      </React.Suspense>
    ),
  },
  {
    path: "/rankings",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppComponent />
      </React.Suspense>
    ),
  },
  {
    path: "/strings",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Strings />
      </React.Suspense>
    ),
  },
  {
    path: "*", // 404 page
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
