// =============================================================================
// SUÍTE DE TESTES E2E - CYPRESS & JAVASCRIPT
// Aplicação sob Teste: SauceDemo (https://www.saucedemo.com)
// Cenário: Recusa de autenticação para usuário bloqueado
// =============================================================================

describe('Autenticação de Usuários - SauceDemo', () => {

  beforeEach(() => {
    // 1. Pré-condição: Visita a página inicial do SauceDemo antes de cada teste
    cy.visit('https://www.saucedemo.com/');
  });

  it('Deve recusar o acesso e exibir mensagem de erro para usuário bloqueado', () => {
    // 2. Ação: Preenche as credenciais do usuário bloqueado
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');

    // 3. Ação: Clica no botão de Login
    cy.get('#login-button').click();

    // 4. Asserção/Oráculo: Valida permanência na página inicial e exibição do alerta de erro
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});
