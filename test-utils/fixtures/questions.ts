import { Question } from "../../src/models";

export function aQuestion(id: string): Question {
  return {
    id,
    title: "Quel nom pour la league?",
    description: "Il faut choisir",
    endingDate: "2019-11-08T13:45:01+00:00",
    user_name: "Test User",
    user_id: "208294780284604222681",
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

export function someQuestions(): Question[] {
  return [aQuestion("1")];
}
