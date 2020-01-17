import React from "react";
import { Answer } from "../../models";
import { AnswerBar, AnswerResultsLayout } from "./styles";

type AnswerWithVoteVount = Answer & {
  voteCount: number;
};

export interface AnswerResultsProps {
  answers: AnswerWithVoteVount[];
}

export const AnswerResults: React.FC<AnswerResultsProps> = ({ answers }) => {
  const totalVoteCount = answers.reduce(
    (sum, answer) => sum + answer.voteCount,
    0
  );

  return (
    <AnswerResultsLayout>
      {answers.map(answer => (
        <li key={answer.id}>
          <AnswerBar percentage={answer.voteCount / totalVoteCount}>
            <span>
              {answer.title} ({answer.voteCount})
            </span>
          </AnswerBar>
        </li>
      ))}
    </AnswerResultsLayout>
  );
};
