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
import { DatePicker } from "../../ui/DatePicker/DatePicker";

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
                required={true}
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
              <DatePicker
                id="endingDate"
                label="Date de fin"
                value={endingDate}
                onChange={setEndingDate}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <AnswersTitle>
                <span>Réponses</span>

                <FloatingActionButton
                  type="button"
                  onClick={addAnswer}
                  aria-label="Ajouter une réponse"
                >
                  +
                </FloatingActionButton>
              </AnswersTitle>

              <AnswersList>
                {answers.map((answer, index) => {
                  const answerTitleId = `answer-title-${answer.id}`;
                  const answerDescriptionId = `answer-description-${answer.id}`;
                  const title = `Réponse ${index + 1}`;

                  return (
                    <li role="group" aria-label={title}>
                      <h4>{title}</h4>

                      <FloatingLabelInput
                        id={answerTitleId}
                        label="Intitulé"
                        value={answer.title}
                        required={true}
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

              <SubmitButton>
                <img src={checkmark} alt="Créer la question" />
              </SubmitButton>
            </FormGroup>
          </FormLayout>
        </Card>
      </PageContent>
    </>
  );
};
