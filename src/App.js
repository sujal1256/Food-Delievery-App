import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  // Overwriting Context
  const [user, setUser] = useState({
    name: "Sujal Malhotra",
    email: "workwithsujal04@gmail.com",
    class: "UCA",
  });
  return (
    <Provider store={store}>
      {/* <UserContext.Provider value={{ user: user }}> */}
        <Header />
        <Outlet />
        <Footer />
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

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
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
