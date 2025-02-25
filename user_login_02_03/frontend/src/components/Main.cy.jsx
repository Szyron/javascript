import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />)
    cy.get('h2').should('have.text','Why Choose Us?');
    cy.get('h1').should('have.text','GSZILogin/Register Frontend');
    cy.get('h1').should('contains.text','GSZI')
    cy.get('img').should("be.visible");

  })
})