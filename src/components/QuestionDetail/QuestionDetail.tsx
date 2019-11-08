import React, { useEffect, useState } from "react";
import { Question, Answer } from "../../models";
import { useServices } from "../ServicesProvider";
import moment from "moment";

export interface QuestionDetailProps {
  id: string;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({ id }) => {
  const services = useServices();
  const [currentAnswerId, setCurrentAnswerId] = useState<Answer | null>(null);
  const [isFormDisabled, setFormDisabled] = useState(false);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    services.question.fetchQuestion(id).then(setQuestion);
  }, [services.question, id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await services.vote.createVoteByQuestionid(id, currentAnswerId!.id);

    setFormDisabled(true);
    setCurrentAnswerId(null);
  }

  if (question === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="question-detail">
      <form onSubmit={handleSubmit}>
        <header>
          <h1 className="title">{question.title}</h1>
          <p className="description">{question.description}</p>
          <p className="ending-date">
            Expires on {moment(question.endingDate).format("LLL")}
          </p>
        </header>

        <ul>
          {question.answers.map(answer => (
            <li key={answer.id}>
              <input
                checked={currentAnswerId === answer}
                onChange={() => setCurrentAnswerId(answer)}
                disabled={isFormDisabled}
                type="radio"
                name="answer"
                id={answer.id}
                value={answer.id}
              />
              <label htmlFor={answer.id}>{answer.title}</label>
            </li>
          ))}
        </ul>

        <footer>
          <button disabled={!currentAnswerId} type="submit">
            Valider
          </button>
          <button type="button">Voir les résultats</button>
        </footer>
      </form>
    </div>
  );
};
