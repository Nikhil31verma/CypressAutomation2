/// <reference types="Cypress" />

//const { expect } = require("chai");

//const { wrap } = require("cypress/types/lodash");
describe('My Sixth test Suite',function(){
    it('My sixth test case',function(){

 cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
const textcheck =$el.text();
if(textcheck.includes("Python"))
{

   cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
      const pricetext= price.text();
      expect(pricetext).to.equal('25');
   })
}
})

    
})

})

