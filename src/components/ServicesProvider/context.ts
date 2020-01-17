import { createContext } from "react";

import { MeService, QuestionService, VoteService } from "../../services";

export interface ServicesContext {
  me: MeService;
  question: QuestionService;
  vote: VoteService;
}

export const servicesContext = createContext<ServicesContext | null>(null);
