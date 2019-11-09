import { AxiosResponse } from "axios";

import { clearOauthToken, redirectToLoginPage } from "../utils/token";

export function redirectToLoginOn401(response: AxiosResponse<any>) {
  if (response.status === 401) {
    clearOauthToken();
    redirectToLoginPage();
  }

  return response;
}
