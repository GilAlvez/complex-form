import { createBrowserRouter } from "react-router-dom";
import NewUser from "../components/pages/NewUser";
import Home from "../components/pages/Home";
import User from "../components/pages/User";
import StepBasicInfo from "../components/pages/NewUser/step1";
import StepAddress from "../components/pages/NewUser/step2";
import StepProfileConfig from "../components/pages/NewUser/step3";
import StepUserInfo from "../components/pages/NewUser/step4";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <User />,
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
