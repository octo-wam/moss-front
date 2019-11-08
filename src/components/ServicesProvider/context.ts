import { createContext } from "react";

import { MeService } from "../../services";
import { QuestionService } from "../../services";
import { VoteService } from "../../services/Vote";

export interface ServicesContext {
  me: MeService;
  question: QuestionService;
  vote: VoteService;
}

export const servicesContext = createContext<ServicesContext | null>(null);
