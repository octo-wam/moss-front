import React from "react";
import moment from "moment";

import { useQuestionDetailState } from "./hooks";

export interface QuestionDetailProps {
  id: string;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({ id }) => {
  const {
    state,
    setCurrentAnswer,
    submitAnswer,
    showResults,
    getVoteCountForAnswer
  } = useQuestionDetailState(id);

  if (!state.question) {
    return <p>Loading...</p>;
  }

  const { question, currentAnswer, hasUserVoted, areResultsShown } = state;

  return (
    <div className="question-detail">
      <form onSubmit={submitAnswer}>
        <header>
          <h2 className="title">{question.title}</h2>
          <p className="description">{question.description}</p>
          <p className="ending-date">
            Expires on {moment(question.endingDate).format("LLL")}
          </p>
        </header>

        <ul>
          {question.answers.map(answer => (
            <li key={answer.id}>
              <input
                checked={currentAnswer === answer}
                onChange={() => setCurrentAnswer(answer)}
                disabled={hasUserVoted}
                type="radio"
                name="answer"
                id={answer.id}
                value={answer.id}
              />
              <label htmlFor={answer.id}>
                {answer.title}{" "}
                {(hasUserVoted || areResultsShown) && (
                  <>({getVoteCountForAnswer(answer)})</>
                )}
              </label>
            </li>
          ))}
        </ul>

        <footer>
          <button disabled={!currentAnswer} type="submit">
            Valider
          </button>
          <button type="button" onClick={showResults}>
            Voir les résultats
          </button>
        </footer>
      </form>
    </div>
  );
};
