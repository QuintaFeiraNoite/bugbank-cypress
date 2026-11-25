import users from '../fixtures/users.json'

class Commands {
    openPage() {
        cy.visit('https://bugbank.netlify.app/');
    }

    registerValidUserNoBalance() {
        cy.contains('button', 'Registrar').click();
        cy.get('.card__register input[name="email"]').type(users[0].email, { force: true });
        cy.get('[name="name"]').type(users[0].name, { force: true });
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users[0].password, { force: true });
        cy.get('[name="passwordConfirmation"]').type(users[0].confirmPassword, { force: true });
    }

    registerValidUserBalance() {
        cy.contains('button', 'Registrar').click();
        cy.get('.card__register input[name="email"]').type(users[1].email, { force: true });
        cy.get('[name="name"]').type(users[1].name, { force: true });
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users[1].password, { force: true });
        cy.get('[name="passwordConfirmation"]').type(users[1].confirmPassword, { force: true });
    }

    registerInvalidUser() {
        cy.contains('button', 'Registrar').click();
        cy.get('.card__register input[name="email"]').type(users[2].email, { force: true });
        cy.get('[name="name"]').type(users[2].name, { force: true });
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users[2].password, { force: true });
        cy.get('[name="passwordConfirmation"]').type(users[2].confirmPassword, { force: true });
    }

    checkIfAccountWasCreated() {
        cy.get('#modalText')
        .should('be.visible')
        .and('contain.text', ' foi criada com sucesso');
    }

    checkIfErrorMessageIsDisplayed() {
        cy.get('.styles__ContainerContent-sc-8zteav-1')
        .should('be.visible')
        .and('contain.text', 'As senhas não são iguais');
        cy.get('#btnCloseModal').click();
    }
}

export default new Commands();