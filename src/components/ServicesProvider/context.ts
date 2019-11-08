import { createContext } from "react";

import { MeService } from "../../services";
import { QuestionService } from "../../services";

export interface ServicesContext {
  me: MeService;
  question: QuestionService;
}

export const servicesContext = createContext<ServicesContext | null>(null);
