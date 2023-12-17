import "./App.css";
import Header from "./components/Header/Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
/** lazy loading importing the component */
const About = lazy(() => import("./components/About"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
const Cart = lazy(() => import("./components/Cart"));
const Search = lazy(() => import("./components/Search/Search"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "ravi",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="overflow-hidden ">
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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
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
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
export default appRouter;
