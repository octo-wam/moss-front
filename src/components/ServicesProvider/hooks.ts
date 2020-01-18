import { useContext } from "react";

import { servicesContext, ServicesContext } from "./context";

export const useServices = () => {
  const services = useContext(servicesContext);

  if (!services) {
    throw new Error("App must be wrapped in ApiProvider.Provider");
  }

  return services;
};

type ServiceName = keyof ServicesContext;

export const useService = <T extends ServiceName>(
  serviceName: T
): ServicesContext[T] => {
  const services = useServices();

  return services[serviceName];
};
