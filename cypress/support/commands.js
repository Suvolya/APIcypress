// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createUser', (user) => {
    cy.request({
        method: 'POST',
        url:'https://petstore.swagger.io/v2/user',
        body:{
            "firstName": "Зоя",
            "lastName": "Панфилова",
            "email": "email@email.ru",
            "password": "password",
            "phone": "phone",
            "userStatus": 0
          },
        }).then((response) => {
            cy.request({
                method: 'POST',
                url:'https://petstore.swagger.io/v2/user',
                body: user,
            })
            expect(response.status).eq(200)
        })
    })

    Cypress.Commands.add('updateUser', (user) => {
        cy.request({
            method: 'PUT',
            url:'https://petstore.swagger.io/v2/user/%D0%9A%D1%83',
            body:{
                "id": 0,
                
                "firstName": "Зоя",
                "lastName": "Панфилова",
                "email": "email@email.ru",
                "password": "password",
                "phone": "phone",
                "userStatus": 0
              },
            }).then((response) => {
                cy.request({
                    method: 'PUT',
                    url:'https://petstore.swagger.io/v2/user/%D0%9A%D1%83',
                    body: user,
                })
                expect(response.status).eq(200)
            })
        })
