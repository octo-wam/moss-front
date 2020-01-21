import styled from "styled-components";
import { BREAKPOINT_TABLET } from "../../ui/Theme/Theme";

export const QuestionLayout = styled.div`
  display: grid;
  grid-gap: 1rem 2rem;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  position: relative;

  button {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(50% + 2.5rem));
  }
`;

export const ChipList = styled.ul`
  grid-column: 2;
  grid-row: 1;
`;

export const Picture = styled.img`
  display: block;
  box-sizing: border-box;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;

  grid-row: 1 / span 2;
  align-self: start;
`;

export const Title = styled.h2`
  grid-row: 2;
  grid-column: 2 / span 2;

  color: var(--color-text-title);
  font-weight: bold;
  font-size: 2rem;
`;

export const Description = styled.p`
  grid-row: 3;
  grid-column: 2;
`;

export const ExpirationDate = styled.p`
  grid-row: 1;
  grid-column: 3;

  color: var(--color-text-light);
`;

export const Answers = styled.ul`
  padding: 2rem 0;
  grid-column: 2 / span 2;
  grid-row: 4;

  @media (min-width: ${BREAKPOINT_TABLET}) {
    max-width: 300px;
  }
`;
