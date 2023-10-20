/// <reference types="Cypress" />

describe('My first test suite',function(){
    it('My first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');  // cy is a predefined object used to get properties of cypress
        cy.get('.search-keyword').type('cu')
        cy.wait(3000);
        cy.get('.product:visible').should('have.length',2);
        cy.get('.products').find('.product').should('have.length',2);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        
    })
})

