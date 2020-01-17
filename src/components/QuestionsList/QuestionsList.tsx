import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../ui/Card/Card";
import { Question } from "../../models";
import { useServices } from "../ServicesProvider/hooks";
import {
  CardLayout,
  ChipList,
  ExpirationDate,
  QuestionPicture,
  QuestionsLayout
} from "./styles";
import { FloatingActionButton } from "../../ui/FloatingActionButton/FloatingActionButton";
import moment from "moment";
import { Chip } from "../../ui/Chip/Chip";
import { PageContent } from "../../ui/Layout/Layout";

export interface QuestionsListProps {}

const useQuestionsListState = () => {
  const services = useServices();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    services.question.fetchQuestions().then(setQuestions);
  }, [services.question]);

  return { questions };
};

export const QuestionsList: React.FC<QuestionsListProps> = () => {
  const { questions } = useQuestionsListState();

  return (
    <PageContent>
      <QuestionsLayout>
        <FloatingActionButton>
          <Link to="/question/new">+</Link>
        </FloatingActionButton>

        <ol>
          {questions.map(question => (
            <li key={question.id}>
              <Link to={`question/${question.id}`}>
                <Card>
                  <CardLayout>
                    <QuestionPicture
                      src={`https://api.adorable.io/avatars/100/${question.id}.png`}
                    />

                    <ChipList>
                      <Chip>Général</Chip>
                    </ChipList>

                    <h2>{question.title}</h2>

                    <ExpirationDate>
                      {moment(question.endingDate)
                        .startOf("day")
                        .fromNow()}
                    </ExpirationDate>
                  </CardLayout>
                </Card>
              </Link>
            </li>
          ))}
        </ol>
      </QuestionsLayout>
    </PageContent>
  );
};
