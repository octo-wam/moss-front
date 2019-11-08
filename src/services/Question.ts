import { AxiosInstance } from "axios";

import { Question } from "../models";

const QUESTIONS: Question[] = [
  {
    id: "1",
    title: "Quel nom pour la league?",
    description: "Il faut choisir",
    endingDate: "2019-11-08T13:45:01+00:00",
    answers: [
      {
        id: "1",
        title: "WAM",
        description: "dgsdgd"
      },
      {
        id: "2",
        title: "IDEA",
        description: "dgsdgd"
      },
      {
        id: "3",
        title: "FAME",
        description: "dgsdgd"
      }
    ]
  }
];

export function createQuestionService(http: AxiosInstance) {
  function fetchQuestions(): Promise<Question[]> {
    return http.get<Question[]>("/questions").then(response => response.data);
  }

  function fetchQuestion(questionId: string) {
    return http
      .get<Question>(`/questions/${questionId}`)
      .then(response => response.data);
  }

  return { fetchQuestions, fetchQuestion };
}

export type QuestionService = ReturnType<typeof createQuestionService>;
