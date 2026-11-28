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
        register.registerPasswordMismatchs();
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkIfErrorMessageIsDisplayed();
    });

    //TC-004
    it('should not register a user with an invalid email', () => {
        register.registerInvalidEmail();
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert

    });

    //TC-005
    it('should not register without required information (email)', () => {
        register.registerWithoutEmail();
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert

    });

    //TC-006
    it('should not register without required information (name)', () => {
        register.registerWithoutName();
        cy.contains('button', 'Cadastrar').click({ force: true });
        //Assert
    });

    //TC-006
    it('should not register without required information (password)', () => {
        register.registerWithoutPassword();
        cy.contains('button', 'Cadastrar').click({ force: true });
        //Assert
    });

    //TC-007
    it('should not register without required information (confirm password)', () => {
        register.registerWithoutPasswordConfirmation();
        cy.contains('button', 'Cadastrar').click({ force: true });
        //Assert
    });

    //TC-008
    it('should not register without required information (name, email, password, confirm password)', () => {
        register.registerWithoutAnyInformation();
        cy.contains('button', 'Cadastrar').click({ force: true });
        //Assert
    });

});
