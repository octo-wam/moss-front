import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import uuid from "uuid/v4";

import { useServices } from "../ServicesProvider";

export const useCreateQuestionFormState = () => {
  const [title, setTitle] = useState(""); // initial value
  const [description, setDescription] = useState(""); // initial value
  const [endingDate, setEndingDate] = useState(""); // initial value

  const services = useServices();
  const history = useHistory();
  const [answers, setAnswers] = useState([
    {
      id: uuid(),
      title: "",
      description: ""
    },
    {
      id: uuid(),
      title: "",
      description: ""
    }
  ]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    services.question
      .createQuestion({ title, description, endingDate, answers })
      .then(() => history.push("/questions"));
  }

  function updateAnswerTitle(id: string, newTitle: string) {
    setAnswers(answers =>
      answers.map(answer => {
        if (answer.id === id) {
          return { ...answer, title: newTitle };
        }

        return answer;
      })
    );
  }

  function updateAnswerDescription(id: string, newDescription: string) {
    setAnswers(answers => 
      answers.map(answer => {
        if (answer.id === id) {
          return { ...answer, description: newDescription };
        }

        return answer;
      })
    );
  }

  function addAnswer() {
    setAnswers(answers => [
      ...answers,
      {
        id: uuid(),
        title: "",
        description: ""
      }
    ]);
  }

  return {
    title,
    setTitle,
    description,
    setDescription,
    endingDate,
    setEndingDate,
    answers,
    updateAnswerTitle,
    updateAnswerDescription,
    addAnswer,
    handleSubmit
  };
};
