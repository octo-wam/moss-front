import React from "react";
import { FooterLayout, Heart, TribesNames } from "./styles";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterLayout>
      <p>Made with love by</p>
      <div>
        <Heart />
        <TribesNames> MOB - WEBF - WOAPI </TribesNames>
        <Heart />
      </div>
    </FooterLayout>
  );
};
