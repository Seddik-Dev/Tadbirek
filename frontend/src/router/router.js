import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import LandingPage from "@/components/LandingPage";
import Login from "@/components/auth/login/Login";
import Register from "@/components/auth/register/Register";
import { NotFoundPage } from "@/components/NotFoundPage";
import UserDashboard from "@/components/users/UserDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: React.createElement(App),
    children: [
      { index: true, element: React.createElement(LandingPage) },
      { path: "login", element: React.createElement(Login) },
      { path: "signup", element: React.createElement(Register) },
      {
        path: "dashboard",
        element: React.createElement(
          ProtectedRoute,
          null,
          React.createElement(UserDashboard),
        ),
      },
      { path: "*", element: React.createElement(NotFoundPage) },
    ],
  },
]);
