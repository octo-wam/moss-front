import React, { useEffect, useState } from "react";

import { api } from "../../api";
import { Question } from "../../models";

export interface QuestionsListProps {}

export const QuestionsList: React.FC<QuestionsListProps> = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    api.question.fetchQuestions().then(setQuestions);
  }, []);

  return (
    <div className="questions-list">
      <ul>
        {questions.map(question => (
          <a href={`question/${question.id}`}>
              <li key={question.id}>
                  <div className="question-description">
                      <div className="label">{question.label}</div>
                      <div className="expiration-date">⏳ 02/03/04 12:03</div>
                  </div>
                  <div className="go-to-question"> &#12297; </div>
              </li>`
          </a>
        ))}
      </ul>
    </div>
  );
};
