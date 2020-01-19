import React from "react";
import moment from "moment";

import { useQuestionDetailState } from "./hooks";
import {
  QuestionLayout,
  Picture,
  Title,
  Description,
  ExpirationDate,
  Answers,
  ChipList
} from "./style";
import { Card } from "../../ui/Card/Card";
import { RadioOptions } from "../../ui/RadioOptions/RadioOptions";
import { FloatingActionButton } from "../../ui/FloatingActionButton/FloatingActionButton";
import checkmark from "../../assets/checkmark.svg";
import { Chip } from "../../ui/Chip/Chip";
import { AnswerResults } from "../../ui/AnswerResults/AnswerResults";
import { PageContent } from "../../ui/Layout/Layout";
import Helmet from "react-helmet";

export interface QuestionDetailProps {
  id: string;
}

export const QuestionDetail: React.FC<QuestionDetailProps> = ({ id }) => {
  const {
    state,
    setCurrentAnswer,
    submitAnswer,
    getVoteCountForAnswer
  } = useQuestionDetailState(id);

  if (!state.question) {
    return null;
  }

  const { question, currentAnswer, hasUserVoted } = state;

  return (
    <>
      <Helmet>
        <title>Moss | {question.title}</title>
      </Helmet>
      <PageContent>
        <Card>
          <form onSubmit={submitAnswer}>
            <QuestionLayout>
              <Picture
                src={`https://api.adorable.io/avatars/100/${question.id}.png`}
              />

              <ChipList>
                <Chip>Général</Chip>
              </ChipList>

              <Title>{question.title}</Title>
              <ExpirationDate>
                {moment(question.endingDate)
                  .startOf("day")
                  .fromNow()}
              </ExpirationDate>
              <Description>{question.description}</Description>

              <Answers>
                {hasUserVoted ? (
                  <AnswerResults
                    answers={question.answers.map(answer => ({
                      ...answer,
                      voteCount: getVoteCountForAnswer(answer)
                    }))}
                  />
                ) : (
                  <RadioOptions
                    name="answers"
                    options={question.answers}
                    onChange={setCurrentAnswer}
                    value={currentAnswer}
                    getOptionId={answer => answer.id}
                    getOptionLabel={answer => answer.title}
                  />
                )}
              </Answers>

              {!hasUserVoted && (
                <FloatingActionButton
                  disabled={!currentAnswer}
                  type="submit"
                  aria-label="Répondre à la question"
                >
                  <img src={checkmark} alt="" />
                </FloatingActionButton>
              )}
            </QuestionLayout>
          </form>
        </Card>
      </PageContent>
    </>
  );
};
