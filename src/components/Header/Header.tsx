import octoLogo from "./octo-logo.svg";
import React from "react";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <h1 className="header-acronym" aria-label="Moss">
        <span>M</span>
        <img src={octoLogo} alt="O" />
        <span>SS</span>
      </h1>
      <div className="header-def">Massive Onlive Simple Sociocraty</div>
    </div>
  );
};
