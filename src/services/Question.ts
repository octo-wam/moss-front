import { AxiosInstance } from "axios";

import { Question, QuestionCreate } from "../models";

export function createQuestionService(http: AxiosInstance) {
  function fetchQuestions(): Promise<Question[]> {
    return http.get<Question[]>("/questions").then(response => response.data);
  }

  function fetchQuestion(questionId: string) {
    return http
      .get<Question>(`/questions/${questionId}`)
      .then(response => response.data);
  }

  function createQuestion(question: QuestionCreate) {
    return http.post<Question>("/questions", question);
  }

  return { fetchQuestions, fetchQuestion, createQuestion };
}

export type QuestionService = ReturnType<typeof createQuestionService>;
