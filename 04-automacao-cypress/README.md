# 🤖 Automação Web E2E com Cypress — SauceDemo

Este diretório contém a suíte de automação de testes End-to-End (E2E) desenvolvida com **Cypress** e **JavaScript** para a aplicação **SauceDemo** (`https://www.saucedemo.com`).

## 🧪 Cenário Automatizado
* **Login com Usuário Bloqueado (`login-locked-user.cy.js`):** Automatização do fluxo de recusa de acesso para o usuário `locked_out_user`, validando a permanência na URL inicial e a exibição do alerta visual de erro em vermelho.

## 🛠️ Tecnologias e Padrões
* **Cypress** (Framework de automação E2E)
* **JavaScript** (ES6+)
* **Seletores CSS** (`#user-name`, `#password`, `#login-button`, `[data-test="error"]`)

## 🚀 Como Executar Localmente
1. Certifique-se de ter o **Node.js** instalado na sua máquina.
2. Navegue até esta pasta pelo terminal:
   ```bash
   cd 04-automacao-cypress# Automação de Testes Web E2E com Cypress
Esta pasta conterá a suíte automatizada em Cypress e JavaScript aplicando o padrão Page Object Model (POM).
