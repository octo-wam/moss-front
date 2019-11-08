import { AxiosInstance } from "axios";

import { Me } from "../models";

export function createMeService(http: AxiosInstance) {
  function fetchMe(): Promise<Me> {
    return Promise.resolve({
      id: "user-1",
      email: "octo@octo.com"
    });
  }

  return { fetchMe };
}

export type MeService = ReturnType<typeof createMeService>;
