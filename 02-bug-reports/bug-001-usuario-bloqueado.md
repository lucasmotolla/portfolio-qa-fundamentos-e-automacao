# Relatórios de Defeitos (Bug Reports)
Esta pasta contém o registro de bugs encontrados nos testes exploratórios.

### 2. Inspeção da Aba Console e Exceção do React
* **Status HTTP:** `401 Unauthorized`
* **Mensagem de Exceção:** `Error: Locked out user tried to log in.`
* **StackTrace do Front-end:**
  ```json
  {
    "username": "locked_out_user",
    "error.message": "Locked out user tried to log in.",
    "application.version": "3.0.0"
  }


# 🐛 BUG-001: Recusa de autenticação e bloqueio de acesso para usuário `locked_out_user`

## 📌 Informações Gerais
* **ID do Bug:** BUG-001
* **Projeto:** SauceDemo E-Commerce
* **Módulo:** Autenticação / Login
* **Data do Teste:** 05/11/2026
* **Relator:** Lucas Doege Mottola (Analista de QA Júnior)
* **Status:** Aberto / Novo
* **Severidade:** Média *(Impede o acesso do usuário específico, mas é o comportamento de regra de segurança esperado)*
* **Prioridade:** Alta *(Necessita de validação visual e de contrato na API)*

---

## 💻 Ambiente de Teste
* **Navegador:** Google Chrome (Versão 156.0.0.0 / Blink)
* **Sistema Operacional:** Linux x86_64
* **URL:** `https://www.saucedemo.com/`
* **Resolução de Tela:** 1360x736

---

## 📝 Descrição do Problema
Ao tentar realizar login com o usuário cadastrado como bloqueado (`locked_out_user`) utilizando a senha padrão (`secret_sauce`), o sistema recusa a autenticação, impede o redirecionamento para o catálogo de produtos e exibe um alerta de erro na interface do usuário.

---

## 🔄 Passos para Reprodução Determinística
1. Acesse a URL `https://www.saucedemo.com/` no navegador.
2. No campo **Username** (`#user-name`), digite: `locked_out_user`.
3. No campo **Password** (`#password`), digite: `secret_sauce`.
4. Clique no botão **Login** (`#login-button`).
5. Observe a mensagem de erro exibida no contêiner vermelho da tela e inspecione o **DevTools (F12)** nas abas Console e Network.

---

## 🎯 Resultado Esperado
O sistema deve recusar o acesso de forma segura, manter o usuário na página de autenticação (`/`), exibir a mensagem de erro apropriada na UI (`"Epic sadface: Sorry, this user has been locked out."`) e registrar a recusa no log de rede com o código HTTP de acesso não autorizado (`401 Unauthorized`).

---

## ❌ Resultado Obtido
O sistema recusou o acesso conforme a regra de segurança, manteve o usuário na rota `/`, exibiu o alerta visual em vermelho e registrou uma exceção no console do React.

---

## 🔍 Evidências Técnicas Reais (DevTools - F12)

### 1. Inspeção da Aba Network & Console
* **Status Code HTTP:** `401 Unauthorized`
* **Mensagem de Erro de Rede:** `Failed to load resource: the server responded with a status of 401 (Unauthorized)`

### 2. Exceção do Front-End (React / Backtrace)
```json
{
  "application": "Swag Store",
  "application.version": "3.0.0",
  "username": "locked_out_user",
  "error.type": "Exception",
  "error.message": "Locked out user tried to log in.",
  "stack": "Error: Locked out user tried to log in.\n    at onSubmit (https://www.saucedemo.com/assets/index-DnLqFcJI.js:577:3077)"
}
