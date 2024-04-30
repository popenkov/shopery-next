/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// -- This is a parent command --
Cypress.Commands.add('login', (email: string, password: string) => {});

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
        }
    }
}

export {};
