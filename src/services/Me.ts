import { AxiosInstance } from "axios";

import { Me } from "../models";

export function createMeService(http: AxiosInstance) {
  function fetchMe(): Promise<Me> {
    return http.get<Me>("/me").then(response => response.data);
  }

  return { fetchMe };
}

export type MeService = ReturnType<typeof createMeService>;
