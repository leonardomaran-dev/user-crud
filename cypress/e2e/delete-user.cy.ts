describe("Excluir Usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Deve excluir um usuário existente", () => {
    cy.get('[data-cy="btn-delete-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-delete-user"]').should("be.visible");
    cy.get('[data-cy="btn-delete-user-submit"]').click();
    cy.contains("Usuário excluído com sucesso!").should("be.visible");
    cy.get('[data-cy="dialog-delete-user"]').should("not.exist");
  });
});
