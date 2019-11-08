import React, { useEffect, useState } from "react";
import moment from 'moment';

import { useServices } from "../ServicesProvider/hooks";
import { Question } from "../../models";

export interface QuestionsListProps {}

export const QuestionsList: React.FC<QuestionsListProps> = () => {
  const services = useServices();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    services.question.fetchQuestions().then(setQuestions);
  }, [services.question]);

  return (
    <div className="questions-list">
      <ul>
        {questions.map(question => (
          <a href={`question/${question.id}`}>
              <li key={question.id}>
                  <div className="question-description">
                      <div className="label">{question.title}</div>
                      <div className="expiration-date">⏳ {moment(question.endingDate).format('LLL')}</div>
                  </div>
                  <div className="go-to-question"> > </div>
              </li>`
          </a>
        ))}
      </ul>
    </div>
  );
};
