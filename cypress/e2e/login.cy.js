import access from '../pages/login/index.js';

describe('Login Functionality', () => {
    beforeEach(() => {
        access.saveDataToLocalStorage();
    });

    it('should visit the login page', () => {
        // Arrange

        // Act
        access.loginValidUser();
        // Assert
        cy.url().should('include', '/home');
        cy.get('.home__ContainerOptions-sc-1auj767-11').should('be.visible');
    });
});