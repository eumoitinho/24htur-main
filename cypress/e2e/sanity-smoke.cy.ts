describe('Sanity Studio Smoke Test', () => {
  it('can visit the studio', () => {
    cy.visit('/studio')
    cy.contains('Sign in', { timeout: 10000 }).should('exist').or('contain', 'Desk')
  })
})

