const OAUTH_KEY_STORAGE_KEY = "auth:token";

const { NODE_ENV } = process.env
if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.')
}

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
const isDevEnv = NODE_ENV === 'development';

export const LOGIN_PAGE_URL = isDevEnv ? "http://localhost:3000/auth/google_oauth2" : "https://octo-moss-back.herokuapp.com/auth/google_oauth2";

console.log('LOGIN_PAGE_URL', LOGIN_PAGE_URL);
console.log('isDevEnv', isDevEnv);


export function redirectToLoginPage() {
  window.location.href = `${LOGIN_PAGE_URL}?redirect_to=${window.location.href}`;
}

export function clearOauthToken() {
  window.localStorage.removeItem(OAUTH_KEY_STORAGE_KEY);
}
