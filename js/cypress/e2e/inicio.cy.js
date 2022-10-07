import { inicioLocators } from '../locators/inicio';

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('body').then((body) => {
      if(body.find(inicioLocators.footerCookiesButton).length > 0) {
        cy.get(inicioLocators.footerCookiesButton).click()
      }
    })
  })
  
  it('llenar formulario con texto', () => {
    cy.get(inicioLocators.inputForm).scrollIntoView().should('be.visible').type('texto')
    cy.get(inicioLocators.formButton).should('be.visible').click()
    cy.get(inicioLocators.formError).should('be.visible')
    .should('contain', 'Favor de registrar una dirección de correo electrónico verdadera.')
  })

  it('llenar el formulario con un correo valido', () => {
    // Tarea 1
  })
})