import register from '../pages/register/index.js';

describe ('Register Functionality', () => {
    beforeEach(() => {
        register.openPage();
});

    //TC-001
    it('should register a new user successfully without balance', () => {
        register.registerValidUserNoBalance();
        cy.contains('button', 'Cadastrar').click({ force: true });
        //Assert
        register.checkIfAccountWasCreated();
    });

    //TC-002
    it('should register a new user successfully with balance', () => {
        register.registerValidUserBalance();
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkIfAccountWasCreated();
    });

    //TC-003
    it('should not register a user with different passwords', () => {
        register.registerInvalidUser();
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkIfErrorMessageIsDisplayed();
    });

});
