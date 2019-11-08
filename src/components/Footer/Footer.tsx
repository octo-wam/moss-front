import React from "react";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div>Made with love by</div>
      <div>
        <span className="heart">♥</span>
        <span className="tribes-names"> MOB - WEBF - WOAPI </span>
        <span className="heart">♥</span>
      </div>
    </div>
  );
};
