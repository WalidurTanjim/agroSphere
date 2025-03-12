import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/Home/Home/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <NotFound/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/aboutus",
            element: <AboutUs/>
        },
     

      ]
    },
  ]);

  export default router;