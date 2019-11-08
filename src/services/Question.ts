import { AxiosInstance } from "axios";

import { Question } from "../models";

const QUESTIONS = [
  {
    id: "q-1",
    label: "Ca va ?"
  },
  {
    id: "q-2",
    label: "Quel nom pour la liste?"
  }
];

export function createQuestionService(http: AxiosInstance) {
  function fetchQuestions(): Promise<Question[]> {
    return Promise.resolve(QUESTIONS);
  }

  function fetchQuestion(questionId: string) {
    const question = QUESTIONS.find(({ id }) => id === questionId)!;

    return Promise.resolve(question);
  }

  return { fetchQuestions, fetchQuestion };
}

export type QuestionService = ReturnType<typeof createQuestionService>;
