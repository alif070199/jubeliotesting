const { visible } = require("ansi-colors");
import 'cypress-xpath';
describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1920,1080);

    cy.visit('https://v2.jubelio.com')

    cy.get('.MuiTypography-root').scrollIntoView({ duration: 1000 })

    cy.get('input[id="textfield-email"]')
      .type('muhammadalif7199@gmail.com')

    cy.get('input[id="textfield-password"]')
      .type('Pssjubelio1#')

    cy.get('.MuiButton-root')
      .click()

    cy.wait(3000)

    cy.get(':nth-child(4) > .false > .mr-2')
      .click()

    cy.get('.MuiGrid-container > [href="/sales/transactions"]')
      .click()

    cy.get('.MuiTabs-flexContainer > :nth-child(1)')
      .click()

      .wait(5000)

    cy.get('#mui-9')
      .type('SO-000000028')

    cy.get('.css-rfnosa > .MuiButton-root')
      .click()
    
    cy.scrollTo('top')

  })
})