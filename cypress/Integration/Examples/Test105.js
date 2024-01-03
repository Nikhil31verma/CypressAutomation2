/// <reference types="Cypress" />

//const { wrap } = require("cypress/types/lodash");

describe('My Five suite',function(){
    it('My Five test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
         // cy is a predefined object used to get properties of cypress
      cy.get('#alertbtn').click();
      cy.get('#confirmbtn').click();
      
           })
  })

