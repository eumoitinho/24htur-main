describe('Tutorial Actions: Sanity Studio', () => {
  // Disable uncaught exception handling to prevent test failure from 3rd party scripts
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  beforeEach(() => {
    // Set viewport to a large desktop size for better visibility
    cy.viewport(1920, 1080)
    
    // Visit the studio
    cy.visit('/studio')
    
    // Wait for the studio to load
    cy.get('[data-testid="structure-tool-list-pane"]', { timeout: 30000 })
      .should('be.visible')
  })

  it('Tutorial: Edit Home Page Hero Section', () => {
    // 1. Navigate to "Página Home"
    cy.contains('Página Home').click()
    
    // 2. Select the first document
    cy.get('[data-testid="pane-item"]').first().click()
    
    // 3. Wait for document to load
    cy.get('[id^="root-field-group"]').should('exist')
    
    // 4. Open "Seção Hero" if needed
    // In Sanity v3, objects are often rendered inline or in fieldsets.
    // We look for the field group label "Seção Hero"
    cy.contains('Seção Hero').scrollIntoView()
    
    // 5. Edit Title
    cy.contains('label', 'Título Principal')
      .parent()
      .find('input[type="text"]')
      .clear({ force: true })
      .type('Sua Viagem dos Sonhos Começa Aqui', { delay: 50 })
      
    // 6. Edit Subtitle
    cy.contains('label', 'Subtítulo')
      .parent()
      .find('textarea, input[type="text"]') 
      .clear({ force: true })
      .type('Experiências inesquecíveis em viagens corporativas e de lazer.', { delay: 30 })
      
    // 7. Visual pause for video
    cy.wait(3000)
    
    cy.log('Action: Edit Hero Complete')
  })

  it('Tutorial: Add Team Member', () => {
    // 1. Navigate to "Página Equipe"
    cy.contains('Página Equipe').click()
    
    // 2. Select the document
    cy.get('[data-testid="pane-item"]').first().click()
    
    // 3. Scroll to "Seção Equipe"
    cy.contains('Seção Equipe').scrollIntoView()
    
    // 4. Find "Membros" array and click "Add item"
    // Sanity array "Add item" button usually has a specific test id or label
    cy.contains('label', 'Membros')
      .parent()
      .find('button:contains("Add item"), button[aria-label="Add item"]')
      .first()
      .click()
    
    // 5. Fill in the new member details in the modal/dialog/popover
    // Sanity opens a dialog for array items of type object
    cy.get('[data-testid="dialog-content"]').within(() => {
        cy.contains('label', 'Nome').next().find('input').type('Novo Membro', { delay: 50 })
        cy.contains('label', 'Cargo').next().find('input').type('Especialista', { delay: 50 })
        cy.contains('label', 'Formação').next().find('input').type('Turismo', { delay: 50 })
        cy.contains('label', 'Experiência').next().find('input').type('10 anos', { delay: 50 })
    })
    
    // 6. Close/Collapse item (usually clicking outside or close button)
    // Actually, if it's a popover, we might just click away or close.
    // If it's inline, it just stays.
    // Let's assume it's inline or we just pause.
    cy.wait(3000)
    
    cy.log('Action: Add Team Member Complete')
  })
})
