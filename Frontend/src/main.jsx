import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "../src/routes/router.jsx";
import "../src/styles/main.scss";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);