import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { HeroProvider } from "./context/HeroContext";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider autoHideDuration={3000} maxSnack={3}  >
    <HeroProvider>
      <RouterProvider router={router}></RouterProvider>
    </HeroProvider>
  </SnackbarProvider>
);
