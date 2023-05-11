import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./errorPage";
import "./index.css";
import Home from "./Components/Home/Home.jsx";
import LogInEmail from "./Components/RegisterEmail/RegisterEmail.jsx";
import LogInUser from "./Components/RegisterEmail/RegisterUser/RegisterUser.jsx";
import MainCupido from "./Components/Home/MainCupido/MainCupido.jsx";
import MainContextual from "./Components/Home/MainContextual/MainContextual.jsx";
import PlayList from "./Components/PlayList/PlayList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <LogInEmail />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login/user",
    element: <LogInUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/cupidomusical",
    element: <MainCupido />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/musicacontextual",
    element: <MainContextual />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/playlist",
    element: <PlayList />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
