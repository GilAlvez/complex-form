import { createBrowserRouter } from "react-router-dom";
import CreateUser from "../components/pages/CreateUser";
import Home from "../components/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "create-user",
        element: <CreateUser />,
      },
    ],
  },
]);
