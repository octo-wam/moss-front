import axios from "axios";

import { redirectToLoginOn401 } from "./interceptors";

export function createHttpClient(baseUrl: string, oauthToken: string) {
  const httpClient = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${oauthToken}`
    }
  });

  httpClient.interceptors.response.use(redirectToLoginOn401);

  return httpClient;
}
