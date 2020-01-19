import styled from "styled-components";

export const FooterLayout = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem 0;
  background: var(--color-footer);
`;

export const Heart = styled.span.attrs({
  children: "♥",
  role: "img"
})`
  color: var(--color-pink);
`;

export const TribesNames = styled.p`
  font-weight: bold;
  display: inline;
`;
