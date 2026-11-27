import access from '../pages/login/index.js';

describe('Login Functionality', () => {
    beforeEach(() => {
        access.saveDataToLocalStorage();
    });

    //TC-001
    it('should login with valid credentials', () => {
        access.loginValidUser();
        cy.url().should('include', '/home');
        //Assert
        cy.get('.home__ContainerOptions-sc-1auj767-11').should('be.visible');
    });

    //TC-002
    it('should not login with a valid email and invalid password', () => {

    });

    //TC-003
    it('should not login only with email', () => {
    
    });

    //TC-004
    it('should not login only with password', () => {

    });

    //TC-005
    it('should not login without any credentials', () => {

    });
    

});