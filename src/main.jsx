import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./Routes/routes.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto">
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
