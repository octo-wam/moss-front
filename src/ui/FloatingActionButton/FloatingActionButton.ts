import styled from "styled-components";
import { Link } from "react-router-dom";

export const FloatingActionButton = styled.button.attrs({
  className: "floating-action-button"
})`
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
  font-family: monospace;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  text-decoration: none;

  &:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const FloatingActionButtonLink = FloatingActionButton.withComponent(
  Link
);
