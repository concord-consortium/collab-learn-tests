// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(function(){
    const branch = Cypress.env("default");
    const mode = "qa";
    const problem='2.1';
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaClear=all&fakeClass=1&fakeUser=student:1&fakeOffering=4&problem=1.1&qaGroup=1');
    cy.get('span').should('contain','QA Cleared: OK');
    cy.visit(branch + '?appMode='+mode+'&fakeClass=5&fakeUser=student:1&fakeOffering=1&qaGroup=1&problem='+problem);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})