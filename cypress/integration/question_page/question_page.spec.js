beforeEach(() => {
  cy.clock(new Date(2020, 0, 5, 12, 30).getTime());
  cy.server();
  cy.route("GET", "/api/v1/me", "fixture:me");
});

function ensureQuestionInfoIsDisplayed() {
  cy.get("h2")
    .contains("Quel nom pour la league ?")
    .should("exist");
  cy.get("p")
    .contains("Il faut choisir 😘")
    .should("exist");
  cy.get("p")
    .contains("in 4 days")
    .should("exist");
}

function ensureResultIsDisplayed(label) {
  cy.contains(label).should("exist");
}

describe("Question page", () => {
  beforeEach(() => {
    cy.route("GET", "/api/v1/questions/question-1", "fixture:question_1");
    cy.route(
      "GET",
      "/api/v1/questions/question-1/votes",
      "fixture:question_1_votes"
    );
    cy.visit("/question/question-1#access_token=test-access-token");
  });

  it("Renders the question", () => {
    ensureQuestionInfoIsDisplayed();
  });
});

describe("When the user has already voted", () => {
  beforeEach(() => {
    cy.route("GET", "/api/v1/questions/question-1", "fixture:question_1");
    cy.route(
      "GET",
      "/api/v1/questions/question-1/votes",
      "fixture:question_1_votes"
    );
    cy.visit("/question/question-1#access_token=test-access-token");
  });

  it("Renders the results", () => {
    ensureResultIsDisplayed("WAM (2)");
    ensureResultIsDisplayed("FAME (1)");
  });
});

function selectOption(label) {
  cy.get("li")
    .contains(label)
    .click();

  cy.get("li")
    .contains(label)
    .get("input")
    .should("be.checked");
}

function ensureNoOptionIsSelected() {
  cy.get('[type="radio"]')
    .should("have.length", 3)
    .should("not.be.checked");
}

function submitVote() {
  cy.get('[aria-label="Répondre à la question"]').click();
}

describe("When the user can vote", () => {
  beforeEach(() => {
    cy.route("GET", "/api/v1/questions/question-2", "fixture:question_2");
    cy.route(
      "GET",
      "/api/v1/questions/question-2/votes",
      "fixture:question_2_votes"
    );
    cy.route("POST", "/api/v1/questions/question-2/votes", "");
    cy.visit("/question/question-2#access_token=test-access-token");
  });

  it("Renders the options", () => {
    ensureNoOptionIsSelected();

    selectOption("Blanc");

    submitVote();

    ensureResultIsDisplayed("Blanc (1)");
    ensureResultIsDisplayed("Noir (0)");
    ensureResultIsDisplayed("Vert (0)");
  });
});
