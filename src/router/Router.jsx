import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/Home/Home/AboutUs";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AddForum from "../DashBoard/Forum/AddForum";
import Community from "../pages/Community/Community";

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
        {
          path: "/signup",
          element: <SignUp/>
        },
        {
          path: "/signin",
          element: <SignIn/>
        },
        {
          path:"/forum",
          element: <AddForum></AddForum>
        },
        {
          path:"/community",
          element: <Community>co</Community>
        }
     


    ]
  },
]);

export default router;