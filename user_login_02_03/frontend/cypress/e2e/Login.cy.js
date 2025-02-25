describe('template spec', () => {
  beforeEach('Oldal betoltese', () => {
    
  })
  it('Mukodik-e a belpes?', () => {
    cy.visit('http://localhost:5173');
    cy.get('#root > div > nav > div > a:nth-child(1)').should('have.text', 'Login').click();
    cy.get('#username').type('user1234');
    cy.get('#password').type('user1234');
    cy.get('#root > div > div > form > button').click();
    cy.get('a').should('contains.text','Vedett Info')
  })
})