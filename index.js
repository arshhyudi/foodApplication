import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Body from "./component/Body";
import ResturantMenu from "./component/ResturantMenu";
import Login from "./component/Login";
import Profile from "./component/ProfileClass";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path:"/",
        element:<Body/> 

      },
      {
        path: "/about",
        element: <About />,
        children: [{ // nested routing
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/resturant/:id",
        element:<ResturantMenu/>
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
