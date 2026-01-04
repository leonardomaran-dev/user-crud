describe("Criar Usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  // Teste com dados válidos

  it("Deve criar um usuário", () => {
    cy.get('[data-cy="name-input"]').type("Usuário Teste", { force: true });
    cy.get('[data-cy="email-input"]').type("usuario.teste@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.contains("Usuário criado com sucesso").should("be.visible");
    cy.get('[data-cy="name-input"]').should("have.value", "");
    cy.get('[data-cy="email-input"]').should("have.value", "");
  });

  it("Deve criar um usuário com mínimo 3 caracteres no nome", () => {
    cy.get('[data-cy="name-input"]').type("Usu", { force: true });
    cy.get('[data-cy="email-input"]').type("usuario.3char@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.contains("Usuário criado com sucesso").should("be.visible");
    cy.get('[data-cy="name-input"]').should("have.value", "");
    cy.get('[data-cy="email-input"]').should("have.value", "");
  });

  it("Deve criar um usuário com máximo de 255 caracteres no nome", () => {
    const longName = "A".repeat(255);
    cy.get('[data-cy="name-input"]').type(longName, { force: true, delay: 0 });
    cy.get('[data-cy="email-input"]').type("usuario.255char@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.contains("Usuário criado com sucesso").should("be.visible");
    cy.get('[data-cy="name-input"]').should("have.value", "");
    cy.get('[data-cy="email-input"]').should("have.value", "");
  });

  // Teste com dados inválidos

  it("Não deve criar um usuário com nome menor que 3 caracteres", () => {
    cy.get('[data-cy="name-input"]').type("Jo", { force: true });
    cy.get('[data-cy="email-input"]').type("usuario.menor3char@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-name-error-message"]')
      .contains("Nome deve ter pelo menos 3 caracteres")
      .should("be.visible");
  });

  it("Não deve criar um usuário com nome maior que 255 caracteres", () => {
    const longName = "A".repeat(256);
    cy.get('[data-cy="name-input"]').type(longName, { force: true, delay: 0 });
    cy.get('[data-cy="email-input"]').type("usuario.256char@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-name-error-message"]')
      .contains("Nome deve ter no máximo 255 caracteres")
      .should("be.visible");
  });

  it("Não deve criar um usuário com email já cadastrado", () => {
    cy.get('[data-cy="name-input"]').type("Email Existente", { force: true });
    cy.get('[data-cy="email-input"]').type("usuario.teste@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-email-error-message"]')
      .contains("Email já cadastrado!")
      .should("be.visible");
  });

  it("Não deve criar um usuário sem email", () => {
    cy.get('[data-cy="name-input"]').type("Usuário Sem Email", { force: true });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-email-error-message"]')
      .contains("Email é obrigatório!")
      .should("be.visible");
  });

  it("Não deve criar um usuário sem nome", () => {
    cy.get('[data-cy="email-input"]').type("usuario.teste@example.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-name-error-message"]')
      .contains("Nome deve ter pelo menos 3 caracteres")
      .should("be.visible");
  });

  it("Não deve criar um usuário com email sem @", () => {
    cy.get('[data-cy="name-input"]').type("Usuário Email Inválido", {
      force: true,
    });
    cy.get('[data-cy="email-input"]').type("email-invalido.com", {
      force: true,
    });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-email-error-message"]')
      .contains("Email inválido")
      .should("be.visible");
  });

  it("Não deve criar usuário com email sem domínio", () => {
    cy.get('[data-cy="name-input"]').type("Usuário Sem Domínio", {
      force: true,
    });
    cy.get('[data-cy="email-input"]').type("usuario@", { force: true });
    cy.get('[data-cy="submit-button"]').click({ force: true });
    cy.get('[data-cy="create-email-error-message"]')
      .contains("Email inválido")
      .should("be.visible");
  });
});
