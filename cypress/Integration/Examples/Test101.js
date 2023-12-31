/// <reference types="Cypress" />

describe('My first test suite',function(){
    it('My first test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');  // cy is a predefined object used to get properties of cypress
        cy.get('.search-keyword').type('cu')
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',2);
       //cy.get('.products').find('.product').should('have.length',2);
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el,index,$list) => {

           const textMat= $el.find('.product-name').text();
           if(textMat==='Capsicum')
           {
           cy.wrap($el).find('.product-action:contains("ADD TO CART")').click();
           }
        } )

       const logo= cy.get('.brand').then((logo) =>{
        cy.log(logo.text());
       })
      // cy.log(logo.text());
     // cy.get('.brand').as('brand');  we can rename the .brand class to brand
     // cy.get('@brand').should('have.text','GREENKART');
        
    })
})

