import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import "./styles/index.css";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={router} />
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
