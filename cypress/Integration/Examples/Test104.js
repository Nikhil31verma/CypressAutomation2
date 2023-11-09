/// <reference types="Cypress" />

//const { wrap } = require("cypress/types/lodash");

describe('My Four suite',function(){
    it('My Four test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/'); 
         // cy is a predefined object used to get properties of cypress
      //CHECKBOXES
      cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3');
      cy.get('[value="radio3"]').check().should('be.checked'); // radio button
      cy.get('select').select('option3').should('have.value','option3'); //staticdropdown
      cy.get('#autocomplete').type('ind');
      cy.get('.ui-menu-item').each(($el,index,$list) =>{
         if($el.text()==='India'){
          cy.wrap($el).click();
         }
      })
           })
  })

