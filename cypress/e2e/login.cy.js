import users from '../fixtures/users.json';

describe('Login Functionality', () => {
    it('should visit the login page', () => {
    //Arrange
        cy.visit('https://bugbank.netlify.app/');
    //Act
        cy.get(':nth-child(1) > [name="email"]').type(users[0].email);
        cy.get('[class="style__ContainerButton-sc-1wsixal-0 otUnI button__child"]').type(users[0].password);
        cy.contains('button', 'Acessar').click();
    //Assert
        
    });
  
});