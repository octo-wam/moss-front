import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import uuid from "uuid/v4";

import { useServices } from "../ServicesProvider";

export interface QuestionCreateProps {}

const useQuestionCreateState = () => {
  const [title, setTitle] = useState(""); // initial value
  const [description, setDescription] = useState(""); // initial value
  const [endingDate, setEndingDate] = useState(""); // initial value

  const services = useServices();
  const history = useHistory();
  const [answers, setAnswers] = useState([
    {
      id: uuid(),
      title: "",
      description: '',
    },
    {
      id: uuid(),
      title: "",
      description: '',
    }
  ]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    services.question.createQuestion({ title, description, endingDate, answers }).then(() => history.push('/questions'));
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
        description: '',
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

export const QuestionCreate: React.FC<QuestionCreateProps> = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    endingDate,
    setEndingDate,
    answers,
    addAnswer,
    updateAnswerTitle,
    updateAnswerDescription,
    handleSubmit
  } = useQuestionCreateState();

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Question</label>
        <input
          placeholder="Intitulé de la question"
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          placeholder="Description de la question"
          id="description"
          type="textarea"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="question-description"
        />
      </div>

      <div className="field">
        <label htmlFor="endingDate">Date de fin</label>
        <input
          type="datetime-local"
          id="endingDate"
          name="meeting-time"
          value={endingDate}
          onChange={e => setEndingDate(e.target.value)}
        />
      </div>

    <div className="availableAnswers">
      {answers.map(answer => (
        <div className="answer">
          <p>Réponse</p>

          <div className="field">
            <label htmlFor={`answer-title-${answer.id}`}>Intitulé</label>
            <input
              placeholder="Label de la réponse"
              id={`answer-title-${answer.id}`}
              type="text"
              value={answer.title}
              onChange={e => updateAnswerTitle(answer.id, e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor={`answer-description-${answer.id}`}>Description</label>
            <input
              placeholder="Description de la réponse"
              id={`answer-description-${answer.id}`}
              type="textarea"
              value={answer.description}
              onChange={e => updateAnswerDescription(answer.id, e.target.value)}
            />
          </div>
        </div>
      ))}
      <button type="button" className="add-answer" onClick={addAnswer}>
        +
      </button>
      </div>
      <div className="field"><button type="submit" className="submit-question">Créer le vote</button></div>
    </form>
  );
};
