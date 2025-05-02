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
import Recovered from "../pages/Authentication/SignIn/ResetPassword/Recovered";
import TaskBoard from "../pages/To-Do/TaskBoard.jsx";
import WeatherDashboard from "../pages/WeatherUpdate/WeatherDashboard.jsx";
import Quiz from "./Quiz/Quiz.jsx";
import QuizCard from "./Quiz/QuizCard.jsx";
import Market from "../pages/Market/Market.jsx";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import IncommingRequests from "../pages/Dashboard/Admin/IncommingRequests/IncommingRequests.jsx";
import Sellers from "../pages/Sellers/Sellers.jsx";
import QuizPage from "./Quiz/quizPage.jsx";
import SellerProfile from "../components/Prodile/SellerProfile/SellerProfile.jsx";
import ProfileUpdate from "../Components/UpdateProfie/ProfileUpdate.jsx";
import LiveSession from "../pages/Dashboard/Trainer/LiveSession/LiveSession.jsx";


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
        path: "market",
        element: <Market />
      },
      {
        path: "products/product-details/:id",
        element: <ProductDetails />
      },
      {
        path: 'sellers',
        element: <Sellers />
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
        path: "recovered",
        element: <Recovered />
      },
      {
        path: "community",
        element: <Community></Community>
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
      },
      {
        path: 'seller-profile/:email',
        element: <SellerProfile />
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
        path: 'myProfile',
        element: <ProfileUpdate></ProfileUpdate>
      },
      {
        path: 'video-upload',
        element: <VideoUpload />
      },
      {
        path: 'quiz',
        element: <Quiz></Quiz>
      },
      {
        path: 'farmer-quiz',
        element: <QuizPage></QuizPage>
      },
      
      {
        path: 'incomming-requests',
        element: <IncommingRequests />
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
        path: "todoList",
        element: <TaskBoard/>
      },
      {
        path: "weatherda",
        element: <WeatherDashboard/>
      },
    
      
      {
        path: 'seller-dashboard',
        element: <SellerDashboard />
      },
      

      {
        path: 'trainer-dashboard',
        element: <TrainerDashboard />
      },
      {
        path: 'live-session',
        element: <LiveSession />
      }
    ]
  },
]);

export default router;