describe('Fooldal es menu', () => {

  beforeEach('Oldal betoltese', () => {
    cy.visit('http://localhost:5173')
  })
  it('Cim megjelenik-e?', () => {
    cy.get('h1').should('contains.text', 'GSZI')
  })
  it('Login Menupont megjelenik-e?', () => {
    cy.get('#root > div > nav > div > a:nth-child(1)').should('have.text', 'Login')
  })
  it('Regisztracio Menupont megjelenik-e?', () => {
    cy.get('#root > div > nav > div > a:nth-child(2)').should('have.text', 'Register')
  })
  it('Fooldal cime megjelenik-e?', () => {  
    cy.get('#root > div > nav > a').should('have.text', 'GSZI Frontend User')
  })
  it('Login menupont mukodik-e?', () => {
    cy.get('#root > div > nav > div > a:nth-child(1)').should('have.text', 'Login').click();
    cy.get('h1').should('contains.text', 'Belepes')
  })
  it('Regisztracio menupont mukodik-e?', () => {
    cy.get('#root > div > nav > div > a:nth-child(2)').should('have.text', 'Register').click();
    cy.get('h1').should('contains.text', 'Regisztracio')
  })
})