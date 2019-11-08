import { useContext } from "react";

import { servicesContext } from "./context";

export const useServices = () => {
  const services = useContext(servicesContext);

  if (!services) {
    throw new Error("App must be wrapped in ApiProvider.Provider");
  }

  return services;
};
