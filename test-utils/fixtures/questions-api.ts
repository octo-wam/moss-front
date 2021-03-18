import { QuestionApi } from "../../src/api-models";

export function anApiQuestion(id: string): QuestionApi {
  return {
    id,
    title: "Quel nom pour la league?",
    description: "Il faut choisir",
    endingDate: "2019-11-08T13:45:01+00:00",
    user: {
      id: "208294780284604222681",
      name: "Test User",
      photo: null
    },
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
  };
}

export function someApiQuestions(): QuestionApi[] {
  return [anApiQuestion("1")];
}
