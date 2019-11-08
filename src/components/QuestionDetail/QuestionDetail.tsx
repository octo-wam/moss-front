import React, { useEffect, useState } from "react";
import { Question } from "../../models";
import { useServices } from "../ServicesProvider";

export interface QuestionDetailProps { id: string }

const question: Question = {
  id: "un id",
  title: "Quelle est la couleur du cheval blanc d'Henri IV ?",
  description: "une description",
  endingDate: "01-12-2019",
  answers: []
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({ id }) => {
  const services = useServices();
  const [question, setQuestion] = useState<Question|null>(null);

  useEffect(() => {
    services.question.fetchQuestion(id).then(setQuestion);
  }, [services.question, id]);

  if (question === null) {
    return (
      <p>Loading...</p>
    );
  }
  return (
    <div className="question-detail">
      <header>
        <h1 className="title">{ question.title }</h1>
        <p className="description">{ question.description }</p>
        <p className="ending-date">Expires on { question.endingDate }</p>
      </header>

      <ul>
        {question.answers.map(answer => <li key={ answer.id }>
          <input type="radio" name="answer" id={ answer.id } value={ answer.id } />
          <label htmlFor={ answer.id }>{ answer.title }</label>
        </li>)}
      </ul>

      <footer>
        <button type="submit">Valider</button>
        <button type="button">Voir les résultats</button>
      </footer>
    </div>
  );
};
