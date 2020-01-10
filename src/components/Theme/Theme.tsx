import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    primary: "#0D2356",
    secondary: "#02B0CB"
  }
};

export type ThemeType = typeof theme;

export interface ThemeProps {}

export const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const color = (colorName: keyof ThemeType['colors']) => (props: { theme: ThemeType }) =>
  props.theme.colors.primary;
