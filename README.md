# 🐞 BugBank Cypress Automation

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress** para validação dos principais fluxos da aplicação **BugBank**.

## 📋 Sobre o Projeto

Esta automação foi desenvolvida para a aplicação BugBank, um sistema criado para estudos e práticas de testes de software.

- Aplicação: https://bugbank.netlify.app/
- Repositório da aplicação: https://github.com/jhonatasmatos/bugbank-ui
- Repositório da automação: https://github.com/QuintaFeiraNoite/bugbank-cypress

## 🚀 Tecnologias

- Cypress
- JavaScript
- Node.js
- Mochawesome (Relatórios)

## 🏗️ Arquitetura

O projeto foi estruturado utilizando o padrão **Page Object Model (POM)**, visando:

- Melhor organização dos testes
- Reutilização de código
- Facilidade de manutenção
- Maior legibilidade da automação

## ⚙️ Pré-requisitos

Antes de executar o projeto, instale:

- Node.js (versão LTS)
- Git

Verifique as instalações:

```bash
node -v
git --version
```

## 📥 Clonando o Projeto

```bash
git clone https://github.com/QuintaFeiraNoite/bugbank-cypress.git
cd bugbank-cypress
```

## 📦 Instalação

Instale as dependências do projeto:

```bash
npm install
```

## ▶️ Executando os Testes

### Modo interativo

```bash
npx cypress open
```

### Modo headless

```bash
npx cypress run
```

## 📊 Relatórios

Após a execução dos testes, os relatórios podem ser gerados através do comando:

```bash
npm run report
```

Os arquivos gerados ficam disponíveis na pasta configurada para relatórios do projeto.

## ✅ Funcionalidades Automatizadas

- Cadastro de usuário
- Login
- Transferência entre contas
- Validações de mensagens
- Fluxos positivos e negativos

## 👨‍💻 Autor

**QuintaFeiraNoite**

GitHub: https://github.com/QuintaFeiraNoite