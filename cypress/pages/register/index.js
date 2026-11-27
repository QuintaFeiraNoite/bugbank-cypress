import users from '../../fixtures/users.json'
import { elements as el } from './elements.js';

const list = Object.values(users).filter(u => !Array.isArray(u));

class Commands {
    openPage() {
        cy.visit('https://bugbank.netlify.app/');
    }

    registerValidUserNoBalance() {
        
        cy.contains('button', 'Registrar').click();
        cy.get(el.email).type(list[0].email, { force: true });
        cy.get(el.name).type(list[0].name, { force: true });
        cy.get(el.password).type(list[0].password, { force: true });
        cy.get(el.passwordConfirmation).type(list[0].password, { force: true });
    }

    registerValidUserBalance() {
        cy.contains('button', 'Registrar').click();
        cy.get(el.email).type(list[1].email, { force: true });
        cy.get(el.name).type(list[1].name, { force: true });
        cy.get(el.password).type(list[1].password, { force: true });
        cy.get(el.passwordConfirmation).type(list[1].password, { force: true });
        cy.get(el.btnToggle).click({ force: true });
    }

    registerInvalidUser() {
        cy.contains('button', 'Registrar').click();
        cy.get(el.email).type('userwithinvalidpassword@user.com', { force: true });
        cy.get(el.name).type('Invalid', { force: true });
        cy.get(el.password).type('Match', { force: true });
        cy.get(el.passwordConfirmation).type('NotMatch', { force: true });
    }

    checkifToggleButtonIsChecked() {
        cy.get(el.btnToggle).should('be.checked');
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