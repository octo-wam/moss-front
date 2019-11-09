import { clearOauthToken, getOauthTokenOrRedirect } from "./token";

describe("getOauthTokenOrRedirect", () => {
  it("Returns the token from the url if it exists", () => {
    // Given
    const accessToken = "accessToken";
    document.location.hash = `#access_token=${accessToken}`;
    localStorage.setItem("auth:token", "something");

    // When
    const token = getOauthTokenOrRedirect();

    // Then
    expect(token).toEqual(accessToken);
    expect(localStorage.getItem("auth:token")).toEqual(accessToken);
  });

  it("Returns the token from the local storage if it exists", () => {
    // Given
    const accessToken = "accessToken";
    localStorage.setItem("auth:token", accessToken);

    // When
    const token = getOauthTokenOrRedirect();

    // Then
    expect(token).toEqual(accessToken);
  });
});

describe("clearOauthToken", () => {
  it("Removes the token from the local storage", () => {
    // Given
    localStorage.setItem("auth:token", "something");

    // When
    clearOauthToken();

    // Then
    expect(localStorage.getItem("auth:token")).toBeNull();
  });
});
