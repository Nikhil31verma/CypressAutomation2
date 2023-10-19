/// <reference types="Cypress" />

describe('My first test suite',function(){
    it('My first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); 
        cy.get('.search-keyword').type('cu')
        cy.wait(3000);
        cy.get('.product:visible').should('have.length',2);
    })
})

