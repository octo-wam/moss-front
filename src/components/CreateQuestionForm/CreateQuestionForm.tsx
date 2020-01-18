import React from "react";
import { Helmet } from "react-helmet";

import { useCreateQuestionFormState } from "./hooks";
import {
  AnswersList,
  AnswersTitle,
  FormGroup,
  FormLayout,
  SubmitButton
} from "./styles";
import { Card } from "../../ui/Card/Card";
import { FloatingLabelInput } from "../../ui/FloatingLabelInput/FloatingLabelInput";
import { FloatingActionButton } from "../../ui/FloatingActionButton/FloatingActionButton";
import checkmark from "../../assets/checkmark.svg";
import { PageContent } from "../../ui/Layout/Layout";

export interface CreateQuestionPayload {}

export const CreateQuestionForm: React.FC<CreateQuestionPayload> = () => {
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
    <>
      <Helmet>
        <title>Moss | Créer une question</title>
      </Helmet>
      <PageContent>
        <Card>
          <FormLayout onSubmit={handleSubmit}>
            <FormGroup>
              <FloatingLabelInput
                id="title"
                label="Question"
                value={title}
                onChange={setTitle}
              />
            </FormGroup>

            <FormGroup>
              <FloatingLabelInput
                id="description"
                label="Description"
                value={description}
                onChange={setDescription}
              />
            </FormGroup>

            <FormGroup>
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
            </FormGroup>

            <FormGroup>
              <AnswersTitle>
                <span>Réponses</span>

                <FloatingActionButton type="button" onClick={addAnswer}>
                  +
                </FloatingActionButton>
              </AnswersTitle>

              <AnswersList>
                {answers.map((answer, index) => {
                  const answerTitleId = `answer-title-${answer.id}`;
                  const answerDescriptionId = `answer-description-${answer.id}`;

                  return (
                    <li>
                      <h4>Réponse {index + 1}</h4>
                      <FloatingLabelInput
                        id={answerTitleId}
                        label="Intitulé"
                        value={answer.title}
                        onChange={value => updateAnswerTitle(answer.id, value)}
                      />

                      <FloatingLabelInput
                        id={answerDescriptionId}
                        label="Description"
                        value={answer.description}
                        onChange={value =>
                          updateAnswerDescription(answer.id, value)
                        }
                      />
                    </li>
                  );
                })}
              </AnswersList>

              <SubmitButton aria-label="Créer le vote">
                <img src={checkmark} alt="" />
              </SubmitButton>
            </FormGroup>
          </FormLayout>
        </Card>
      </PageContent>
    </>
  );
};
