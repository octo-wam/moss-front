import styled from "styled-components";

export const Input = styled.input`
  all: unset;
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 1rem;
  border: 1px solid var(--color-border);
  transition: border-color 0.2s ease;

  &:focus {
    border-color: var(--color-accent);
  }
`;
