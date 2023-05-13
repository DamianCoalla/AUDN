import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import ErrorPage from "./errorPage";
import Home from "./Components/Home/Home.jsx";
import MainCupido from "./Components/Home/MainCupido/MainCupido.jsx";
import MainContextual from "./Components/Home/MainContextual/MainContextual.jsx";
import PlayList from "./Components/PlayList/PlayList.jsx";
import RegisterEmail from "./Components/RegisterEmail/RegisterEmail.jsx";
import RegisterUser from "./Components/RegisterEmail/RegisterUser/RegisterUser.jsx";
import LogIn from "./Components/LogIn/LogIn.jsx";
import SearchNavBar from "./Components/NavBar/SearchNabBar/SearchNavBar.jsx";
import UsersNavBar from "./Components/NavBar/UsersNavBar/UsersNavBar.jsx";
import HomeNabBar from "./Components/NavBar/HomeNabBar/HomeNabBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <RegisterEmail />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register/user",
    element: <RegisterUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LogIn />,
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
  {
    path: "/usermenu",
    element: <UsersNavBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/searchmenu",
    element: <SearchNavBar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomeNabBar />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
