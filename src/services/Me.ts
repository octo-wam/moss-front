import { AxiosInstance } from "axios";

import { Me } from "../models";

export function createMeService(http: AxiosInstance) {
  function fetchMe(): Promise<Me> {
    // return http.get<Me>('/me').then(response => response.data)
    return Promise.resolve({
      id: "user-1",
      email: "octo@octo.com"
    });
  }

  return { fetchMe };
}

export type MeService = ReturnType<typeof createMeService>;
