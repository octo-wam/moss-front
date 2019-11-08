import React, { useEffect, useState } from "react";

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
      <h1>Questions list</h1>

      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.title}</li>
        ))}
      </ul>
    </div>
  );
};
