import "./QuestionsList.scss";
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
      <h1>Questions list</h1>

      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.label}</li>
        ))}
      </ul>
    </div>
  );
};
