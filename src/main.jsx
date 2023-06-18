import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./Routes/routes.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto">
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
