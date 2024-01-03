/// <reference types="Cypress" />

//const { expect } = require("chai");

//const { wrap } = require("cypress/types/lodash");
describe('My eight text suite',function(){
   it('My eight test case',function(){

      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      cy.get('.mouse-hover-content').invoke('show');
      cy.contains('Top').click();
      cy.url().should('contain','top');


   })
})



