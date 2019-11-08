const OAUTH_KEY_STORAGE_KEY = "auth:token";

function getTokenFromUrl() {
  return "";
}
function getTokenFromLocalStorage() {
  return window.localStorage.get(OAUTH_KEY_STORAGE_KEY);
}

export function getOauthTokenOrRedirect() {
  const tokenFromUrl = getTokenFromUrl();

  if (tokenFromUrl) {
    return tokenFromUrl;
  }

  const tokenFromLocalStorage = getTokenFromLocalStorage();

  if (tokenFromLocalStorage) {
    return tokenFromLocalStorage;
  }

  // TODO: redirect to login page
}
