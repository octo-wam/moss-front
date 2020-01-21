const OAUTH_KEY_STORAGE_KEY = "auth:token";

function getTokenFromUrl() {
  const searchParams = new URLSearchParams(document.location.hash);

  return searchParams.get("#access_token");
}

function getTokenFromLocalStorage() {
  return window.localStorage.getItem(OAUTH_KEY_STORAGE_KEY);
}

export function getOauthTokenOrRedirect(): string {
  const tokenFromUrl = getTokenFromUrl();

  if (tokenFromUrl) {
    window.localStorage.setItem(OAUTH_KEY_STORAGE_KEY, tokenFromUrl);
    return tokenFromUrl;
  }

  const tokenFromLocalStorage = getTokenFromLocalStorage();

  if (tokenFromLocalStorage) {
    return tokenFromLocalStorage;
  }

  redirectToLoginPage();

  // Make TS compile. This code will never be reached as the client
  // will be redirected first
  return "";
}

export const LOGIN_PAGE_URL =
  "https://octo-moss-back.herokuapp.com/auth/google_oauth2";

export function redirectToLoginPage() {
  window.location.href = LOGIN_PAGE_URL;
}

export function clearOauthToken() {
  window.localStorage.removeItem(OAUTH_KEY_STORAGE_KEY);
}
