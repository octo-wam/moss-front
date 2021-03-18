import { AxiosInstance, AxiosResponse } from "axios";

import { Me } from "../models";
import { MeApi } from "../api-models";

export function createMeService(http: AxiosInstance) {
  function fetchMe(): Promise<Me> {
    return http.get<MeApi>("/me").then(formatApiResponse);
  }

  return { fetchMe };
}

const formatApiResponse = (meApiResponse: AxiosResponse<MeApi>): Me => {
  const data = meApiResponse.data
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    photo: data.photo || "https://www.fillmurray.com/150/150",
  }
}

export type MeService = ReturnType<typeof createMeService>;
