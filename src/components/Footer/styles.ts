import styled from "styled-components";
import { color } from "../Theme/Theme";

export const FooterLayout = styled.footer`
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -7px 13px -4px rgba(158, 158, 158, 1);
  flex-direction: column;
  color: ${color("primary")};
`;

export const Heart = styled.span.attrs({
  children: "♥",
  role: 'img'
})`
  color: #f542f5;
`;

export const TribesNames = styled.p`
  font-weight: bold;
`;
