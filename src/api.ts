import { createQuestionService } from "./services/Question";

export const api = {
  question: createQuestionService(process.env.REACT_APP_API_URL!)
};
