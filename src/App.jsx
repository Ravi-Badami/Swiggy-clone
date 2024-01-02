/* eslint-disable react-refresh/only-export-components */
import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
// import Error from "./components/Error";
import Body from "./components/Body";
import { lazy, startTransition, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Checkout from "./components/Checkout/Checkout";

/** lazy loading importing the component */
const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(
  () => import("./components/Restaurants/RestaurantMenu"),
);
const Cart = lazy(() => import("./components/Cart"));
const Search = lazy(() => import("./components/Search/Search"));
const Contact = lazy(() => import("./components/Contact"));
const Error = lazy(() => import("./components/Error"));

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    startTransition(() => {
      const data = {
        name: "ravi",
      };
      setUserName(data.name);
    });
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="overflow-hidden scroll-smooth ">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<h1>Loading</h1>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/search/:dishId",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/Checkout",
        element: <Checkout />,
      },
    ],
  },
]);
export default appRouter;
