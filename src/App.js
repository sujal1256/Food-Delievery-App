import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header, { Title } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";

const Instamart = lazy(()=>import("./components/Instamart"))
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass name={"Sujal"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // This id can be anything 12,124,1324 and based on these ids we can set the restaurant to show up
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: 
        (<Suspense fallback={<Shimmer/>}>
            <Instamart />,
        </Suspense>)
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
