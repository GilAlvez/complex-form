import { createBrowserRouter } from "react-router-dom";
import NewUser from "../pages/NewUser";
import Home from "../pages/Home";
import StepBasicInfo from "../pages/NewUser/step1";
import StepAddress from "../pages/NewUser/step2";
import StepProfileConfig from "../pages/NewUser/step3";
import StepUserInfo from "../pages/NewUser/step4";
import Profile from "../pages/Profile";
import EditUser from "../pages/Profile/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/edit",
    element: <EditUser />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
    children: [
      {
        path: "basic-info",
        element: <StepBasicInfo />,
      },
      {
        path: "address",
        element: <StepAddress />,
      },
      {
        path: "profile-config",
        element: <StepProfileConfig />,
      },
      {
        path: "user-info",
        element: <StepUserInfo />,
      },
    ],
  },
]);
