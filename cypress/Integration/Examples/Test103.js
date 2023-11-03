/// <reference types="Cypress" />

//const { wrap } = require("cypress/types/lodash");

describe('My Third suite',function(){
    it('My Third test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');  // cy is a predefined object used to get properties of cypress
      //CHECKBOXES
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');   // checkbox checked
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      //STATIC DROPDOWNS
      cy.get('select').select('Option3').should('have.value','option3');
      //dynamic dropdowns
      cy.get('#autocomplete').type('ind');
      cy.get('.ui-menu-item').each(($el,index,$list) => {
      if($el.text()==='India'){
        cy.wrap($el).click();
      }
      })

    })
  })

