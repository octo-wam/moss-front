import { AxiosInstance } from "axios";
import { QuestionApi } from "../api-models";
import { Question, QuestionCreate } from "../models";

export function createQuestionService(http: AxiosInstance) {
  function fetchQuestions(): Promise<Question[]> {
    return http.get<Question[]>("/questions").then(response => response.data.map(formatApiResponse));
  }

  function fetchQuestion(questionId: string) {
    return http
      .get<QuestionApi>(`/questions/${questionId}`)
      .then(response => formatApiResponse(response.data));
  }

  function createQuestion(question: QuestionCreate) {
    return http.post<Question>("/questions", question);
  }

  return { fetchQuestions, fetchQuestion, createQuestion };
}

const formatApiResponse = (questionApi: QuestionApi): Question => {
  const userApi = questionApi.user
  return {
    id: questionApi.id,
    title: questionApi.title,
    description: questionApi.description,
    endingDate: questionApi.endingDate,
    answers: questionApi.answers,
    user: {
      id: userApi.id,
      name: userApi.name,
      photo: userApi.photo || "https://www.fillmurray.com/200/200"
    }
  }
}

export type QuestionService = ReturnType<typeof createQuestionService>;
