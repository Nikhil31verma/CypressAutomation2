/// <reference types="Cypress" />

describe('My Second test suite',function(){
    it('My Second test case',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');  // cy is a predefined object used to get properties of cypress
        cy.get('.search-keyword').type('cu')
        cy.wait(2000);
      //  cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el,index,$list) => {

           const textMat= $el.find('.product-name').text();
           if(textMat==='Capsicum')
           {
           cy.wrap($el).find('.product-action:contains("ADD TO CART")').click();
           }
        } )

       })
      // cy.log(logo.text());
     // cy.get('.brand').as('brand');  we can rename the .brand class to brand
     // cy.get('@brand').should('have.text','GREENKART');
        
    })

