# Relatório de Execução de Teste — Fluxo de Carrinho e Checkout

## Informações Gerais
- **Projeto:** SauceDemo E-Commerce[cite: 1]
- **Funcionalidade:** Carrinho de Compras e Checkout Ponta a Ponta (`/checkout-step-one.html` e `/checkout-complete.html`)[cite: 1]
- **Data da Execução:** 05/11/2026
- **QA Responsável:** Lucas Doege Mottola
- **Status Geral:** PASSOU (100% de Aprovação)[cite: 1]

## Ambiente e Massa de Dados
- **Navegador:** Google Chrome (v156.0 / 64-bit)
- **Massa de Dados:** Perfil `standard_user` / Senha `secret_sauce`[cite: 1]

## Tabela de Cobertura de Testes
| ID | Cenário de Teste | Tipo | Status |
| :--- | :--- | :--- | :--- |
| **CT-001** | Realizar compra de múltiplos produtos com sucesso (Caminho Feliz) | Funcional / E2E | PASS |
| **CT-002** | Validação de campo "First Name" obrigatório | Regra de Negócio | PASS |
| **CT-003** | Validação de campo "Last Name" obrigatório | Regra de Negócio | PASS |
| **CT-004** | Validação de campo "Postal Code" obrigatório | Regra de Negócio | PASS |

## Detalhamento e Evidências Visuais
![Produtos Adicionados](evidencias/01-produtos-adicionados.png)
*Figura 1: Validação do contador de itens no carrinho.*[cite: 1]

![Pedido Finalizado](evidencias/03-compra-finalizada.png)
*Figura 2: Confirmação de pedido concluído.*[cite: 1]
