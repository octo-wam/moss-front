import styled from "styled-components";
import { FloatingActionButton } from "../../ui/FloatingActionButton/FloatingActionButton";

export const FormLayout = styled.form`
  position: relative;
`;

export const FormGroup = styled.div`
  padding: 1rem 0;
`;

export const AnswersTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  font-weight: bold;
  text-transform: uppercase;
  color: var(--color-text-title);

  button {
    margin-left: 1.5rem;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.5rem;
  }
`;

export const AnswersList = styled.ul`
  li + li {
    margin-top: 3rem;
  }

  h4 {
    font-style: italic;
  }
`;

export const SubmitButton = styled(FloatingActionButton)`
  position: absolute;
  bottom: -5rem;
  left: 50%;
  transform: translateX(-50%);
`;
