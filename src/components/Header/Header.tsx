import React from "react";
import { HeaderLayout, LogoMoss, UserAvatar, UserLayout } from "./styles";
import { useMe } from "../AuthProvider/hooks";
import { PageContent } from "../../ui/Layout/Layout";
import { Link } from "react-router-dom";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const me = useMe();

  return (
    <HeaderLayout>
      <PageContent>
        <Link to="/">
          <LogoMoss role="heading" aria-level={1} alt="Accueil" />
        </Link>
        <UserLayout>
          <UserAvatar
            src={me.photo || `http://www.fillmurray.com/150/150`}
          />
          <p>{me.name}</p>
        </UserLayout>
      </PageContent>
    </HeaderLayout>
  );
};
