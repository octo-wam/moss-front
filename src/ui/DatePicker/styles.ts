import styled from "styled-components";

export const LabelLayout = styled.label`
  display: block;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  margin-top: 1.5rem;

  span {
    display: block;
    position: absolute;
    left: 1rem;

    top: -0.5rem;
    font-size: 1.2rem;
    background: var(--color-card);
    padding: 0 0.5rem;
  }

  input {
    padding-top: 2rem;
  }
`;
