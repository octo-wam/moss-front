import { AxiosInstance } from "axios";
import { Vote } from "../models";

const VOTES: Vote[] = [
  {
    id: "123456",
    answerId: "2",
    user: {
      id: "123456Y",
      name: "Jean Bob"
    }
  },
  {
    id: "12768",
    answerId: "1",
    user: {
      id: "123456Y",
      name: "Bob Lebowsky"
    }
  }
];

export function createVoteService(http: AxiosInstance) {
  function fetchVotesByQuestionId(questionId: string): Promise<Vote[]> {
    return http
      .get<Vote[]>(`/questions/${questionId}/votes`)
      .then(response => response.data);
  }

  function createVoteByQuestionid(
    questionId: string,
    answerId: string
  ): Promise<unknown> {
    return http.post(`/questions/${questionId}/votes`, { answerId });
  }

  return { fetchVotesByQuestionId, createVoteByQuestionid };
}

export type VoteService = ReturnType<typeof createVoteService>;
