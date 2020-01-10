import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import uuid from "uuid/v4";

import { useServices } from "../ServicesProvider";
import { useCreateQuestionFormState } from "./hooks";

export interface CreateQuestionFormProps {}

export const CreateQuestionForm: React.FC<CreateQuestionFormProps> = () => {
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
  } = useCreateQuestionFormState();

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">
          Question
          <input
            placeholder="Que voulez-vous faire comme WAMEO ?  "
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </div>

      <div className="field">
        <label htmlFor="description">
          Description
          <input
            placeholder="Nous sommes en train d’organiser un WAMEO - nous cherchons le meilleur plan !"
            id="description"
            type="textarea"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="question-description"
          />
        </label>
      </div>

      <div className="field">
        <label htmlFor="endingDate">
          Date de fin
          <input
            type="datetime-local"
            id="endingDate"
            name="meeting-time"
            value={endingDate}
            onChange={e => setEndingDate(e.target.value)}
          />
        </label>
      </div>

      <ul className="availableAnswers">
        {answers.map(answer => (
          <li className="answer">
            <p>Réponse</p>
            <div className="field">
              <label htmlFor={`answer-title-${answer.id}`}>
                Intitulé
                <input
                  placeholder="Aux arcs"
                  id={`answer-title-${answer.id}`}
                  type="text"
                  value={answer.title}
                  onChange={e => updateAnswerTitle(answer.id, e.target.value)}
                />
              </label>
            </div>

            <div className="field">
              <label htmlFor={`answer-description-${answer.id}`}>
                Description
                <input
                  placeholder="Best place ever ❤️"
                  id={`answer-description-${answer.id}`}
                  type="textarea"
                  value={answer.description}
                  onChange={e =>
                    updateAnswerDescription(answer.id, e.target.value)
                  }
                />
              </label>
            </div>
          </li>
        ))}
        <button type="button" className="add-answer" onClick={addAnswer}>
          +
        </button>
      </ul>
      <div className="field">
        <button type="submit" className="submit-question">
          Créer le vote
        </button>
      </div>
    </form>
  );
};
