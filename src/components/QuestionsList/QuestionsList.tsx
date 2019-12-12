import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { useServices } from "../ServicesProvider/hooks";
import { Question } from "../../models";

export interface QuestionsListProps {}

const useQuestionsListState = () => {
  const services = useServices();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    services.question.fetchQuestions().then(setQuestions);
  }, [services.question]);

  return { questions };
};

export const QuestionsList: React.FC<QuestionsListProps> = () => {
  const { questions } = useQuestionsListState();

  return (
    <div className="questions-list">
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <Link to={`question/${question.id}`}>
              <div className="question-description">
                <div className="label">{question.title}</div>
                <div className="expiration-date">
                  <span role="img" aria-label="Expiration date">
                    ⏳
                  </span>{" "}
                  {moment(question.endingDate).format("LLL")}
                </div>
              </div>
              <div className="go-to-question"> > </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link to='/question/new'>+</Link>
    </div>
  );
};
