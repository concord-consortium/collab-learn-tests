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
    cy.visit(branch + '?appMode=qa&fakeClass=5&fakeUser=student:1&fakeOffering=1&qaGroup=1&problem=1.1');
});