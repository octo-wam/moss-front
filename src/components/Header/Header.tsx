import octoLogo from "./octo-logo.svg"
import React, { useEffect, useState } from "react";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="header">
            <span>M</span>
            <img src={octoLogo} alt="O"/>
            <span>SS</span>
        </div>
    );
};
