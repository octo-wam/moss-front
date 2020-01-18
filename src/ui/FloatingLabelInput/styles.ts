import styled from "styled-components";

export const LabelLayout = styled.label`
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  margin-top: 1.5rem;

  span {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  input {
    all: unset;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding: 1rem;
    border: 1px solid var(--color-border);
    transition: border-color 0.2s ease;
  }

  input:focus {
    border-color: var(--color-accent);
  }

  input[value]:not([value=""]) + span,
  input:focus + span {
    top: 0;
    font-size: 1.2rem;
    background: var(--color-card);
    padding: 0 0.5rem;
  }
`;
