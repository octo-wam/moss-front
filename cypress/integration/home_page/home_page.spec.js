/// <reference types="Cypress" />

function ensureQuestionIsDisplayed({ id, title, timeAgo }) {
  const titleEl = cy.get("h2").contains(title);
  titleEl.should("exist");

  const containerEl = titleEl.closest("a");
  containerEl.contains(timeAgo).should("exist");

  containerEl.click();

  cy.url().should("include", `/question/${id}`);
  cy.go("back");
}

describe("Home page", () => {
  beforeEach(() => {
    cy.clock(new Date(2020, 0, 5, 12, 30).getTime());
    cy.server();
    cy.route("GET", "/api/v11/me", "fixture:me");
    cy.route("GET", "/api/v11/questions", "fixture:questions");
    cy.route("GET", "/api/v11/questions/question-1", "fixture:question_1");
    cy.route("GET", "/api/v11/questions/question-2", "fixture:question_2");
    cy.route("GET", "/api/v11/questions/*/votes", "fixture:question_1_votes");
    cy.visit("/#access_token=test-access-token");
  });

  it("Displays a link to each question page", () => {
    ensureQuestionIsDisplayed({
      id: "question-1",
      title: "Quel nom pour la league ?",
      timeAgo: "in 4 days"
    });

    ensureQuestionIsDisplayed({
      id: "question-2",
      title: "Quelle est la couleur du cheval blanc d'Henry 4 ?",
      timeAgo: "in 10 days"
    });
  });
});
