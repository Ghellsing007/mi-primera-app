import { DefaultTheme } from "styled-components/native";

export const lightTheme: DefaultTheme = {
  colors: {
    primary: "#6200EE",
    secondary: "#03DAC6",
    background: "#f5f5f5",
    text: "#000000",
    button: {
      background: "#6200EE",
      text: "#FFFFFF",
    },
  },
  fonts: {
    large: 20,
    medium: 16,
    small: 12,
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: "#bb86fc",
    secondary: "#03DAC6",
    background: "#121212",
    text: "#ffffff",
    button: {
      background: "#bb86fc",
      text: "#000000",
    },
  },
  fonts: {
    large: 20,
    medium: 16,
    small: 12,
  },
};
