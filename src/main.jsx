import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./components/i18n.jsx";
import { UserContext } from "./components/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <UserContext.Consumer>
          <App />
        </UserContext.Consumer>
      </Suspense>
    </BrowserRouter>
  </ChakraProvider>
);
