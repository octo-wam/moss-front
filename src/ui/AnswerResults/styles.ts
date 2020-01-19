import styled from "styled-components";

export interface AnswerBarProps {
  percentage: number;
}

export const AnswerBar = styled.div<AnswerBarProps>`
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  overflow: hidden;
  background: var(--color-border);

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-dark-blue);
    width: ${props => props.percentage * 100}%;
  }

  span {
    position: relative;
    z-index: 1;
    color: var(--color-text-reverse);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
`;

export const AnswerResultsLayout = styled.ul`
  li + li {
    margin-top: 10px;
  }
`;
