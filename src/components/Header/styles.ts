import styled from "styled-components";
import mossLogo from "../../assets/logo.svg";
import { BREAKPOINT_TABLET } from "../../ui/Theme/Theme";

export const HeaderLayout = styled.header`
  background: var(--color-header);
  padding: 1.5rem 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const LogoMoss = styled.img.attrs({
  src: mossLogo
})`
  width: 8rem;
`;

export const UserLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-gap: 2rem;

  > :last-child {
    color: var(--color-text-light);
    display: none;
  }

  @media (min-width: ${BREAKPOINT_TABLET}) {
    > :last-child {
      display: block;
    }
  }
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  border: 1px solid #555;
`;
