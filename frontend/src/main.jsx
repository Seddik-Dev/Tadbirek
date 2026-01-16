import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { NotFoundPage } from "./components/NotFoundPage";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
  { path: "*", element: <NotFoundPage /> }, // You can replace <App /> with your NotFoundPage component
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
