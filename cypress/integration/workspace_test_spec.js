// before(function(){
//     // cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=dev');
//     cy.visit('http://localhost:8080/?appMode=demo&demoClass=5&demoUser=student:5&demoOffering=1&problem=1.1');
//
// });

describe('Test Problems', function(){
    it('will open the specified problem', function(){
        const problems = [
            {
                number:'1.1',
                title:'Solving a Mystery',
                subtitle: 'An Introduction to Similarity'
            },
            {
                number:'1.2',
                title:'Stretching a Figure',
                subtitle:'Comparing Similar Figures'
            },
            {
                number:'1.3',
                title:'Scaling Up and Down',
                subtitle:'Corresponding Sides and Angles'
            },
            {
                number:'2.1',
                title:'Drawing Wumps',
                subtitle:'Making Similar Figures'
            },
            {
                number:'2.2',
                title:'Hats Off to the Wumps',
                subtitle:'Changing a Figure\'s Size and Location'
            },
            {
                number:'2.3',
                title:'Mouthing Off and Nosing Around',
                subtitle:'Scale Factors'
            }
            ];
        problems.forEach(function(problem){
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=5&demoUser=student:9&demoOffering=4&problem='+problem.number);
            // cy.visit('http://localhost:8080/?appMode=demo&demoClass=5&demoUser=student:1&demoOffering=1&problem='+problem.number);
            it('verify Problem title presence and correctness', function(problem){
                cy.get('.problem').should('contain', problem.title+' '+problem.subtitle);
            });
        });
    });
});

describe('Desktop functionalities', function(){
    it('will verify that only one nav area is open at a time', function(){
        cy.get('.left-nav > .tabs > .tab:first').click(); //left nav expand area should be visible
        cy.get('.left-nav.expanded').should('be.visible');
        cy.get('.right-nav>.tabs.expanded').should('not.be.visible');
        cy.get('.bottom-nav.expanded').should('not.be.visible');
        cy.get('#rightNavTabMy\\ Work').click(); //my work expand area should be visible
        cy.get('.left-nav.expanded').should('not.be.visible');
        cy.get('.right-nav>.tabs.expanded').should('be.visible');
        cy.get('.bottom-nav.expanded').should('not.be.visible');
        cy.get('#learningLogTab').click(); //learning log expand area should be visible
        cy.get('.left-nav.expanded').should('not.be.visible');
        cy.get('.right-nav>.tabs.expanded').should('not.be.visible');
        cy.get('.bottom-nav.expanded').should('be.visible');
    });
});