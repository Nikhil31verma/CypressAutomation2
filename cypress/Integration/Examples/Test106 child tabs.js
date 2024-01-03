/// <reference types="Cypress" />

//const { expect } = require("chai");

//const { wrap } = require("cypress/types/lodash");
describe('My Sixth test Suite',function(){
    it('My sixth test case',function(){

 cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
// cy.get('.radioButton').check().should('be.checked');
 //cy.get('[value="radio2"]').check().should('be.checked');    // radio button checked
 //cy.get('input[value="radio2"]').should('be.checked').uncheck().should('not.be.checked');
//cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2');
//cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
//cy.get('#alertbtn').click(); // handle alerts
//cy.on('window:alert',(str)=>{    // use window:confirm in case of confirm button
   // expect(str).to.equal('Hello , share this practice page and share your knowledge');
//})
cy.get('#opentab').invoke('removeAttr','target').click();  // open child window by removing target attri
 cy.origin('https://www.qaclickacademy.com/',()=>{
    cy.get('#navbarSupportedContent a[href*="contactus"]').click();
    cy.get('.cont p').should('contain.text','info@qaclickacademy.com'); 
    
 })

})
})

