import "styled-components/native";

type ButtonColors = {
  background: string;
  text: string;
};

type ThemeFonts = {
  large: number;
  medium: number;
  small: number;
};

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  button: ButtonColors;
};

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: ThemeColors;
    fonts: ThemeFonts;
  }
}
