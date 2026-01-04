describe("Atualizar Usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Testes com dados válidos

  it("Deve atualizar um usuário", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]').clear().type("Nome Atualizado");
    cy.get('[data-cy="email-input-update"]')
      .clear()
      .type("email@atualizado.com");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.contains("Usuário atualizado com sucesso").should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("not.exist");
  });

  it("Deve atualizar um usuário com nome minimo de 3 caracteres", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]').clear().type("Usu");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.contains("Usuário atualizado com sucesso").should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("not.exist");
  });

  it("Deve atualizar um usuário com nome máximo de 255 caracteres", () => {
    const longName = "a".repeat(255);
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]')
      .clear()
      .type(longName, { delay: 0 });
    cy.get('[data-cy="submit-button-update"]').click();
    cy.contains("Usuário atualizado com sucesso").should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("not.exist");
  });

  // Testes com dados inválidos

  it("Não deve atualizar um usuário sem nome", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]').clear();
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-name-error-message"]')
      .contains("Nome deve ter pelo menos 3 caracteres")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário com nome menor que 3 caracteres", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]').clear().type("Us");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-name-error-message"]')
      .contains("Nome deve ter pelo menos 3 caracteres")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário com nome maior que 255 caracteres", () => {
    const longName = "a".repeat(256);
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="name-input-update"]')
      .clear()
      .type(longName, { delay: 0 });
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-name-error-message"]')
      .contains("Nome deve ter no máximo 255 caracteres")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário com email existente", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="email-input-update"]')
      .clear()
      .type("usuario.255char@example.com");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-email-error-message"]')
      .contains("Email já cadastrado!")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário com email sem @", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="email-input-update"]').clear().type("emailinvalido.com");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-email-error-message"]')
      .contains("Email inválido!")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário com email sem domínio", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="email-input-update"]').clear().type("email@invalido");
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-email-error-message"]')
      .contains("Email inválido!")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });

  it("Não deve atualizar um usuário sem email", () => {
    cy.get('[data-cy="btn-edit-user"]').first().click({ force: true });
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
    cy.get('[data-cy="email-input-update"]').clear();
    cy.get('[data-cy="submit-button-update"]').click();
    cy.get('[data-cy="update-email-error-message"]')
      .contains("Email é obrigatório!")
      .should("be.visible");
    cy.get('[data-cy="dialog-edit-user"]').should("be.visible");
  });
});
