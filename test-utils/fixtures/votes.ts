import { Vote } from "../../src/models";

export function someVotes(): Vote[] {
  return [
    {
      answerId: "answer-2",
      user: { id: "user-1" }
    },
    {
      answerId: "answer-1",
      user: { id: "user-2" }
    }
  ];
}
