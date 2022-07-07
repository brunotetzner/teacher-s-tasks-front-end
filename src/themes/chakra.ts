import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: {
      primary: "#000000",
      secondary: "#958F8F",
      third: "D9D9D9",
    },

    green: {
      primary: "#E42C2C",
    },

    yellow: {
      primary: "#5DD952",
    },

    white: {
      primary: "#F6F7F6",
    },
  },
  fonts: {
    body: "poppins",
  },

  styles: {
    global: {
      body: {
        backgroundColor: "white.primary",
      },
    },
  },
});
