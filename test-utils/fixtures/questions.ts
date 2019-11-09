import { Question } from "../../src/models";

export function someQuestions(): Question[] {
  return [
    {
      id: "1",
      title: "Quel nom pour la league?",
      description: "Il faut choisir",
      endingDate: "2019-11-08T13:45:01+00:00",
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
    }
  ];
}
