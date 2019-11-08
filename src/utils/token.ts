const OAUTH_KEY_STORAGE_KEY = "auth:token";

function getTokenFromUrl() {
  const searchParams = new URLSearchParams(document.location.hash);

  return searchParams.get("#access_token");
}
function getTokenFromLocalStorage() {
  return window.localStorage.getItem(OAUTH_KEY_STORAGE_KEY);
}

export function getOauthTokenOrRedirect() {
  const tokenFromUrl = getTokenFromUrl();

  if (tokenFromUrl) {
    window.localStorage.setItem(OAUTH_KEY_STORAGE_KEY, tokenFromUrl);
    return tokenFromUrl;
  }

  const tokenFromLocalStorage = getTokenFromLocalStorage();

  if (tokenFromLocalStorage) {
    return tokenFromLocalStorage;
  }

  document.location.href =
    "https://octo-moss-back.herokuapp.com/auth/google_oauth2";
}
