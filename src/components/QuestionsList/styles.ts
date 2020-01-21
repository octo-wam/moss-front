import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../ui/Theme/Theme";

export const QuestionsLayout = styled.div`
  position: relative;

  ol {
    display: grid;
    grid-gap: 3.5rem;
  }

  .floating-action-button {
    position: fixed;
    top: 4.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
  }

  a {
    text-decoration: none;
  }
`;

export const QuestionPicture = styled.img`
  display: block;
  box-sizing: border-box;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  grid-row: 1 / span 2;
  grid-column: 1;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    height: 7rem;
    width: 7rem;
  }
`;

export const CardLayout = styled.div`
  display: grid;
  grid-gap: 1rem 3rem;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(2, auto);
  align-items: center;

  h2 {
    grid-row: 2;
    grid-column: 2 / span 2;
    color: var(--color-text-title);
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const ChipList = styled.ul`
  grid-column: 2;
  grid-row: 1;
`;

export const ExpirationDate = styled.p`
  grid-row: 1;
  grid-column: 3;
  justify-self: end;

  color: var(--color-text-light);
  font-size: 1.2rem;
`;

export const QuestionItem = styled.li`
  > a {
    display: block;
    transform: scale(1);
    transition: transform 0.2s ease;
  }

  > a:hover,
  > a:focus {
    transform: scale(1.05);
  }

  > a:focus {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;
