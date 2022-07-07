import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themes/chakra";
import { Providers } from "./providers";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Providers>
        <App />
      </Providers>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
