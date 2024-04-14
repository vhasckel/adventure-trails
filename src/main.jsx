import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home/index.jsx";
import ExploreTrailsPage from "./pages/ExploreTrails/index.jsx";
import RegisterTrailPage from "./pages/RegisterTrail/index.jsx";
import App from "./App.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/explorar-trilhas",
        element: <ExploreTrailsPage />,
      },
      {
        path: "/cadastrar-trilha",
        element: <RegisterTrailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
