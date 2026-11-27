import register from '../pages/register/index.js';


describe ('Register Functionality', () => {
    beforeEach(() => {
        register.openPage();
});

    it('should register a new user successfully without balance', () => {
    //Arrange
        register.registerValidUserNoBalance();
    //Act
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkIfAccountWasCreated();
    });

    it('it should register a new user successfully with balance', () => {

    //Arrange
        register.registerValidUserBalance();
    //Act
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkifToggleButtonIsChecked();
        register.checkIfAccountWasCreated();
    });

    it('should not register a user with different passwords', () => {

    //Arrange
        register.registerInvalidUser();
    //Act
        cy.contains('button', 'Cadastrar').click({ force: true });
    //Assert
        register.checkIfErrorMessageIsDisplayed();
    });

});
