import users from '../fixtures/users.json'

describe ('Register Functionality', () => {
    it('should visit the register page', () => {
    //Arrange
        cy.visit('https://bugbank.netlify.app/');
    //Act

        //Usuario sem saldo
        cy.contains('button', 'Registrar').click();
        cy.get('.card__register input[name="email"]').type(users[0].email, { force: true });
        cy.get('[name="name"]').type(users[0].name, { force: true });
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]').type(users[0].password, { force: true });
        cy.get('[name="passwordConfirmation"]').type(users[0].password, { force: true });
        cy.contains('button', 'Cadastrar').click({ force: true });

    //Assert

    });
    
});