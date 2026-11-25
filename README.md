# 🐞 BugBank Cypress Automation

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress** para validação dos principais fluxos da aplicação **BugBank**.

O objetivo deste projeto é demonstrar a implementação de testes automatizados utilizando boas práticas de automação, garantindo maior confiabilidade, cobertura funcional e facilidade de manutenção da suíte de testes.

---

## 📋 Sobre o Projeto

A automação foi desenvolvida para a aplicação **BugBank**, uma plataforma criada para estudos de testes de software e Quality Assurance (QA).

### 🔗 Links

- **Aplicação:** https://bugbank.netlify.app/
- **Repositório da aplicação:** https://github.com/jhonatasmatos/bugbank-ui
- **Repositório da automação:** https://github.com/QuintaFeiraNoite/bugbank-cypress

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js
- NPM

---

## 📁 Estrutura do Projeto

```text
cypress/
├── e2e/               # Casos de teste
├── fixtures/          # Massa de dados
├── support/           # Commands e configurações
├── screenshots/       # Evidências de falha
└── videos/            # Vídeos das execuções

cypress.config.js
package.json
README.md
```

---

## ✅ Cenários Automatizados

Atualmente a suíte contempla validações dos seguintes fluxos:

- Cadastro de usuário
- Login
- Transferências bancárias (Em andamento)
- Validações de mensagens de erro
- Fluxos positivos e negativos
- Regras de negócio da aplicação

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

| Ferramenta | Versão Recomendada |
|------------|-------------------|
| Node.js | LTS |
| NPM | Última versão |
| Git | Última versão |

### Verificando as instalações

**Node.js**

```bash
node -v
```

**NPM**

```bash
npm -v
```

**Git**

```bash
git --version
```

Caso necessário:

- Node.js → https://nodejs.org/
- Git → https://git-scm.com/

---

## 📥 Clonando o Projeto

```bash
git clone https://github.com/QuintaFeiraNoite/bugbank-cypress.git
```

Acesse a pasta do projeto:

```bash
cd bugbank-cypress
```

---

## 📦 Instalando as Dependências

Instale as dependências do projeto:

```bash
npm install
```

ou

```bash
npm i
```

---

## ▶️ Executando os Testes

### Executar no modo gráfico

Abre a interface do Cypress:

```bash
npx cypress open
```

Após a abertura da interface:

1. Escolha o navegador desejado.
2. Selecione o teste que deseja executar.

---

### Executar toda a suíte em modo Headless

```bash
npx cypress run
```

---

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/nome-do-arquivo.cy.js"
```

---

### Executar em um navegador específico

**Chrome**

```bash
npx cypress run --browser chrome
```

**Edge**

```bash
npx cypress run --browser edge
```

**Firefox**

```bash
npx cypress run --browser firefox
```

---

## 📊 Evidências de Execução

### Screenshots

Geradas automaticamente em caso de falha:

```text
cypress/screenshots
```

### Vídeos

Gerados durante execuções em modo headless:

```text
cypress/videos
```

---

## 🏗️ Boas Práticas Aplicadas

- Organização dos testes por funcionalidade
- Massa de dados desacoplada utilizando Fixtures
- Reutilização de código
- Comandos customizados
- Testes independentes
- Fácil manutenção da suíte de automação

---

## 💻 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature

```bash
git checkout -b feature/minha-feature
```

3. Realize suas alterações
4. Faça o commit

```bash
git commit -m "feat: adiciona novo cenário"
```

5. Envie suas alterações

```bash
git push origin feature/minha-feature
```

6. Abra um Pull Request

---

## 👨‍💻 Autor

Desenvolvido por **QuintaFeiraNoite**.

GitHub:

👉 https://github.com/QuintaFeiraNoite

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo, prática de automação de testes e demonstração de conhecimentos em Quality Assurance e Cypress.