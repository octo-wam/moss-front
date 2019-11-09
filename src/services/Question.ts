import { AxiosInstance } from "axios";

import { Question } from "../models";

export function createQuestionService(http: AxiosInstance) {
  function fetchQuestions(): Promise<Question[]> {
    return http.get<Question[]>("/questions").then(response => response.data);
  }

  // TODO: Use real implementation when API is ready 🤷‍
  function fetchQuestion(questionId: string) {
    return fetchQuestions().then(questions => {
      const question = questions.find(({ id }) => id === questionId);

      if (!question) {
        throw new Error("404");
      }

      return question;
    });
  }

  // function fetchQuestion(questionId: string) {
  //   return http
  //     .get<Question>(`/questions/${questionId}`)
  //     .then(response => response.data);
  // }

  return { fetchQuestions, fetchQuestion };
}

export type QuestionService = ReturnType<typeof createQuestionService>;
