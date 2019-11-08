import "./Footer.scss";
import React, { useEffect, useState } from "react";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer">
            Made with love by: MOB - WEBF - WOAPI ♥
        </div>
    );
};
