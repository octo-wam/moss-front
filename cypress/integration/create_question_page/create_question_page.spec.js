function fillInfo(label, value) {
  cy.contains(label).click();
  cy.focused().type(value);
}

function fillAnswer(label, intitule, description) {
  cy.get(`[aria-label="${label}"]`)
    .contains("Intitulé")
    .click();
  cy.focused().type(intitule);
  cy.get(`[aria-label="${label}"]`)
    .contains("Description")
    .click();
  cy.focused().type(description);
}

describe("Create question page", () => {
  beforeEach(() => {
    cy.clock(new Date(2020, 0, 5, 12, 30).getTime());
    cy.server();
    cy.route("GET", "/api/v1/me", "fixture:me");
    cy.route("POST", "/api/v1/questions", "fixture:create_question");
    cy.route("GET", "/api/v1/questions", "fixture:questions");
    cy.visit("/question/new#access_token=test-token");
  });

  it("Renders a form to create the question", () => {
    fillInfo("Question", "Quelle nom pour la league ?");
    fillInfo("Description", "Il faut choisir 😘");

    cy.contains("Date de fin").type("2020-01-12T18:30");

    fillAnswer("Réponse 1", "WAM", "Web Api Mobile");
    fillAnswer("Réponse 2", "FAME", "Front Api Mobile Experience");

    cy.get('[aria-label="Ajouter une réponse"]').click();

    fillAnswer("Réponse 3", "IDEA", "Like Intellij");

    cy.get('[alt="Créer la question"]').click();

    cy.url().should("include", "/questions");
  });
});
