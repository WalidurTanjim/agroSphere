import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../pages/NotFound/NotFound";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/Home/Home/AboutUs";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import SignIn from "../pages/Authentication/SignIn/SignIn";
import AddForum from "../DashBoard/Forum/AddForum";
import Community from "../pages/Community/Community";
import AllVideos from "../pages/Tutorial/AllVideos";
import Events from "../pages/Home/Events";
import TrainerProfile from "../pages/Home/TrainerProfile/TrainerProfile";
import DashboardLayout from "../layout/DashboardLayout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import FarmerDashboard from "../pages/Dashboard/Farmer/FarmerDashboard/FarmerDashboard";
import SellerDashboard from "../pages/Dashboard/Seller/SellerDashboard/SellerDashboard";
import TrainerDashboard from "../pages/Dashboard/Trainer/TrainerDashboard/TrainerDashboard";
import VideoUpload from "../pages/Dashboard/Admin/VideoUpload/VideoUpload";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import SuccessStory from "../pages/Dashboard/Farmer/SuccessStory/SuccessStory";
import SupportPage from "../pages/SupportPage/SupportPage";
import ResetPassword from "../pages/Authentication/SignIn/ResetPassword/ResetPassword";
import OTPInput from "../pages/Authentication/SignIn/ResetPassword/OTPInput";
import Reset from "../pages/Authentication/SignIn/ResetPassword/Reset";
import PostDetails from "../components/PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "aboutus",
        element: <AboutUs />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "otp",
        element: <OTPInput />
      },
      {
        path: "reset",
        element: <Reset />
      },
      {
        path: "community",
        element: <Community>co</Community>
      },
      {
        path: "all-videos",
        element: <AllVideos></AllVideos>
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'support',
        element: <SupportPage />
      },
      {
        path: 'trainer_profile/:id',
        element: <TrainerProfile />
      },
      {
        path: 'community/post-details/:id',
        element: <PostDetails />
      }
    ]
  },{
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'admin-dashboard',
        element: <AdminDashboard />
      },
      {
        path: 'video-upload',
        element: <VideoUpload />
      },
      {
        path: 'all-users',
        element: <AllUsers />
      },

      {
        path: 'farmer-dashboard',
        element: <FarmerDashboard />
              
      },
      {
        path: 'success-story',
        element: <SuccessStory />
      },
      {
        path: "addForum",
        element: <AddForum></AddForum>
      },

      {
        path: 'seller-dashboard',
        element: <SellerDashboard />
      },

      {
        path: 'trainer-dashboard',
        element: <TrainerDashboard />
      }
    ]
  },
]);

export default router;