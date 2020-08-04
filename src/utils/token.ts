const OAUTH_KEY_STORAGE_KEY = "auth:token";

const { NODE_ENV } = process.env
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.')
}
const isProdEnv = NODE_ENV === 'production';

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

const AUTH_BASE_URL = isProdEnv ? process.env.REACT_APP_OTHER_BASE_URL : process.env.REACT_APP_LOCAL_BASE_URL;

const LOGIN_PAGE_URL = `${AUTH_BASE_URL}/auth/google_oauth2`

export function redirectToLoginPage() {
  window.location.href = `${LOGIN_PAGE_URL}?redirect_to=${window.location.href}`;
}

export function clearOauthToken() {
  window.localStorage.removeItem(OAUTH_KEY_STORAGE_KEY);
}
