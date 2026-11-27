import users from '../../fixtures/users.json'
import { elements as el } from './elements.js';

const list = Object.values(users).filter(u => !Array.isArray(u));

class Commands {
    saveDataToLocalStorage() {
        cy.fixture('users.json').as('users');
        cy.get('@users').then((data) => {
            cy.visit('https://bugbank.netlify.app/', {
                onBeforeLoad: (win) => {
                    Object.entries(data).forEach(([key, value]) => {
                        win.localStorage.setItem(
                            key,
                            typeof value === 'string' ? value : JSON.stringify(value)
                        );
                    });
                }
            });
        });
    }

    openPage() {
        cy.visit('https://bugbank.netlify.app/');
    }

    loginValidUser() {
        cy.get(el.email).type(list[0].email);
        cy.get(el.password).type(list[0].password);
        cy.contains('button', 'Acessar').click();
    }


}

export default new Commands();