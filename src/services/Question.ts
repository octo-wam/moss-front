import { Question } from "../models";

export function createQuestionService(apiUrl: string) {
  function fetchQuestions(): Promise<Question[]> {
    return Promise.resolve([
      {
        id: "q-1",
        label: "Ca va ?"
      },
      {
        id: "q-2",
        label: "Quel nom pour la liste?"
      }
    ]);
  }

  return { fetchQuestions };
}

export type QuestionService = ReturnType<typeof createQuestionService>;
