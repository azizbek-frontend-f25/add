import Root from "../Layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../pages/Home";
import Basket from "../pages/Basket";
import About from "../pages/About";
import Contact from "../pages/Contact";

const route = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <App /> },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);

const Routers = () => {
  return <RouterProvider router={route} />;
};

export default Routers;
