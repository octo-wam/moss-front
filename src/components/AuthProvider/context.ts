import { createContext } from "react";

import { Me } from "../../models";

export const meContext = createContext<Me | null>(null);
