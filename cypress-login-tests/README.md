# Testes E2E com Cypress + TypeScript

Valida a página https://the-internet.herokuapp.com/login ao enviar o formulário com usuário e senha em branco.

## Testes incluídos
- `cypress/e2e/login-erro.cy.ts`: mensagens de erro do login com campos em branco.
- `cypress/e2e/dynamic-loading.cy.ts`: clica em "Start", espera o "Loading..." desaparecer e valida "Hello World!".

## O que o teste de login valida
1. A mensagem de erro contém o texto `Your username is invalid!`.
2. O elemento `<div id="flash">` possui a classe CSS `error`.

Há também um teste extra que confere a cor de fundo vermelha do balão.

## Pré-requisitos
- Node.js 18 ou superior

## Como rodar
```bash
npm install
npm run cy:run    # modo headless
npm run cy:open   # modo interativo
```

## Como enviar pelo GitHub
```bash
git init
git add .
git commit -m "Testes de mensagem de erro no login com Cypress"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Estrutura
```
cypress/
  e2e/login-erro.cy.ts       # teste 1: erro de login
  e2e/dynamic-loading.cy.ts  # teste 2: loader
  support/e2e.ts         # arquivo de suporte
cypress.config.ts        # configuração (baseUrl, specPattern)
tsconfig.json
package.json
```
