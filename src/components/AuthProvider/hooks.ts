import { useContext } from "react";

import { Me } from "../../models";
import { meContext } from "./context";

export const useMe = (): Me => {
  const me = useContext(meContext);

  if (!me) {
    throw new Error("This component must be wrapped in AuthProvider");
  }

  return me;
};
