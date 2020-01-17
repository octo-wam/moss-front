import styled from "styled-components";

export const FloatingActionButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;

  background: var(--color-accent);
  color: var(--color-text-reverse);
  font-weight: 400;
  font-size: 4rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
    font-family: monospace;
  }
`;
