import { AxiosInstance } from "axios";
import { Vote } from "../models";

export function createVoteService(http: AxiosInstance) {
  function fetchVotesByQuestionId(questionId: string): Promise<Vote[]> {
    return http
      .get<Vote[]>(`/questions/${questionId}/votes`)
      .then(response => response.data);
  }

  function createVoteByQuestionId(
    questionId: string,
    answerId: string
  ): Promise<unknown> {
    return http.post(`/questions/${questionId}/votes`, { answerId });
  }

  return {
    fetchVotesByQuestionId,
    createVoteByQuestionId
  };
}

export type VoteService = ReturnType<typeof createVoteService>;
