# Testes de API REST com Postman
Esta pasta armazenará a coleção de testes exportada (.json) e documentações de rotas HTTP.

# 🌐 Testes de API REST com Postman — ServeRest

Este diretório contém a coleção automatizada de testes de API REST desenvolvida no Postman para a aplicação pública **ServeRest** (`https://serverest.dev`).

## 🧪 Cenários de Teste Cobertos
* **`POST /login` (Cenário Negativo):** Validação de autenticação com e-mail/senha não cadastrados.
  * **Status Code Esperado:** `401 Unauthorized`
  * **Asserções Automatizadas (JavaScript):**
    * Validação do Status HTTP `401`.
    * Validação do corpo da resposta JSON: `"Email e/ou senha inválidos"`.

## 📁 Arquivos do Diretório
* `Serverest-API-Tests.postman_collection.json`: Coleção exportada pronta para importação e execução no Postman.

## 🚀 Como Executar os Testes
1. Baixe o arquivo `Serverest-API-Tests.postman_collection.json`.
2. Abra o **Postman** e clique em **Import**.
3. Selecione o arquivo `.json`.
4. Abra a requisição `POST - Login` e clique em **Send**.
5. Verifique os resultados na aba **Test Results (2/2)**.
