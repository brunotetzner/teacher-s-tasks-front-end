import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Providers } from "./providers";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/styled";
import { GlobalStyle } from "./themes/globalStyled";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Providers>
  </React.StrictMode>
);

reportWebVitals();
