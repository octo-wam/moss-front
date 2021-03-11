import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../ui/Card/Card";
import { Question } from "../../models";
import { useService } from "../ServicesProvider/hooks";
import {
  AuthorName,
  CardLayout,
  ChipList,
  ExpirationDate,
  QuestionItem,
  QuestionPicture,
  QuestionsLayout,
  Title
} from "./styles";
import { FloatingActionButtonLink } from "../../ui/FloatingActionButton/FloatingActionButton";
import moment from "moment";
import { Chip } from "../../ui/Chip/Chip";
import { PageContent } from "../../ui/Layout/Layout";
import Helmet from "react-helmet";

export interface QuestionsListProps {}

const useQuestionsListState = () => {
  const questionService = useService("question");
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    questionService.fetchQuestions().then(setQuestions);
  }, [questionService]);

  return { questions };
};

export const QuestionsList: React.FC<QuestionsListProps> = () => {
  const { questions } = useQuestionsListState();

  return (
    <>
      <Helmet>
        <title>Moss | Octo</title>
      </Helmet>
      <PageContent>
        <QuestionsLayout>
          <FloatingActionButtonLink
            to="/question/new"
            aria-label="Créer une question"
          >
            <span>+</span>
          </FloatingActionButtonLink>

          <ol>
            {questions.map(question => (
              <QuestionItem data-cy={`question-${question.id}`} key={question.id}>
                <Link to={`question/${question.id}`}>
                  <Card>
                    <CardLayout>
                      <QuestionPicture
                        data-cy="author-profil-picture"
                        src={question.user.photo || `https://www.fillmurray.com/50/50`}
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
                      <AuthorName data-cy="author-name">
                        Postée par <span>{question.user.name}</span>
                      </AuthorName>
                    </CardLayout>
                  </Card>
                </Link>
              </QuestionItem>
            ))}
          </ol>
        </QuestionsLayout>
      </PageContent>
    </>
  );
};
