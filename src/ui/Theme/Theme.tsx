import React from "react";
import { createGlobalStyle } from "styled-components";

export interface ThemeProps {}

export const BREAKPOINT_TABLET = "768px";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;;
    
    --color-primary: #2a5298;
    --color-accent: #8dc6dd;
    --color-white: #fbfcff;
    --color-black: #000;
    --color-dark: #323232;
    --color-gray: #484c62;
    --color-light-gray: #666;
    --color-lighter-gray: #B7B7B7;
    --color-light-blue: #e0ebfd;
    --color-dark-blue: #0e3d6f;
    --color-blue: #6786ba;
    --color-pink: #f542f5;
    --color-red: #fb3434;
    
    --color-header: var(--color-white);
    --color-footer: var(--color-white);
    --color-card: var(--color-white);
    --color-background-gradient: linear-gradient(-130deg, #2a5298, #1e3c72);
    --color-text-title: var(--color-gray);
    --color-text: var(--color-black);
    --color-text-light: var(--color-light-gray);
    --color-text-reverse: var(--color-white);
    --color-border: var(--color-lighter-gray);
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: var(--font-primary);
    color: var(--color-text);
    font-size: 1.6rem;
  }
`;

export const Theme: React.FC<ThemeProps> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
