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

    cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root')
      .click()

    cy.get('.MuiButton-root > .d-flex')
      .click()

    cy.scrollTo('top')

    cy.get('#mui-23')
      .click()

    cy.scrollTo('top')

    cy.get('#mui-23-option-10').scrollIntoView()

    cy.scrollTo('top')

    cy.get('#mui-23-option-10')
      .click()

    cy.scrollTo('top')

    cy.get('input[name="ref_no"]')
      .type('Alif123')

    cy.scrollTo('top')

    cy.get('#mui-30')
      .click()

    cy.scrollTo('top')

    cy.get('#mui-30-option-0')
      .click()

    cy.scrollTo('top')

    cy.get('#mui-31')
    .type('Keterangan')

    cy.scrollTo('top')

    cy.get('.css-1o9xw9j > .MuiButton-root')
    .click()

    cy.get('.jss43')
    .click()

    cy.scrollTo('top')

    cy.get('.MuiGrid-container > :nth-child(4) > .text-primary')
    .click()

    .wait(1000)

    cy.xpath("//input[@placeholder='Cth:  Blok, Unit No, Patokan']")
    .type('Alamat lengkap blok lengkap dan lain2')

    cy.get('.d-flex > .MuiButton-root')
    .click()

    cy.get('#mui-34')
    .type('08123456688')

    cy.get('#mui-35')
    .type('resi999999')

    cy.get('#mui-39')
    .type('7000')

    cy.get('#mui-44')
    .type('1000')

    cy.get('.d-flex > div > .MuiButton-root')
    .click()

    cy.get('.MuiTabs-flexContainer > :nth-child(1)')
    .click()

    cy.get('[style="gap: 8px;"] > .MuiButtonBase-root')
    .click()


    .wait(5000)

    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .MuiTypography-root > .d-flex > .font-weight-lightbold')
    .click()

    cy.get('.d-flex > div > .MuiButton-root')
    .click()

    .wait(5000)

    cy.get('.css-1o9xw9j > .MuiButton-root').scrollIntoView()

    cy.get('.css-1o9xw9j > .MuiButton-root')
    .click()

    cy.get('.css-1rjpksd > .flex-row > .jss115 > .jss116')
    .click()

    cy.scrollTo('top')

    cy.get('.d-flex > div > .MuiButton-root')
    .click()

    



















  })
})