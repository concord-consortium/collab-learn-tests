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
            cy.visit('https://collaborative-learning.concord.org/branch/master/?problem='+problem.number);
            it('verify Problem title presence and correctness', function(problem){
                cy.get('.problem').should('contain', problem.title+' '+problem.subtitle);
            });
        });
    });
});

describe('Desktop functionalities', function(){
    it('will verify that only one tab is open at a time', function(){
        cy.get('.left-nav > .tabs').click(); //left nav expand area should be visible
        cy.get('.left-nav > .expanded-area').should('be.visible');
        cy.get('.my-work > .expanded-area').should('not.be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('not.be.visible');

        cy.get('.my-work > .tabs').click(); //my work expand area should be visible
        cy.get('.left-nav.expanded > .expanded-area').should('not.be.visible');
        cy.get('.my-work.expanded > .expanded-area').should('be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('not.be.visible');

        cy.get('.learning-log > .tabs').click(); //learning log expand area should be visible
        cy.get('.left-nav.expanded > .expanded-area').should('not.be.visible');
        cy.get('.my-work.expanded > .expanded-area').should('not.be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('be.visible');
    });

    it('will verify that clicking on the workspace will close any open tabs', function(){
        cy.get('.learning-log > .tabs').click(); //learning log expand area should be visible
        cy.get('.workspace').click(); //clicking on workspace should close any open tabs
        cy.get('.left-nav.expanded > .expanded-area').should('not.be.visible');
        cy.get('.my-work.expanded > .expanded-area').should('not.be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('not.be.visible');

        cy.get('.left-nav > .tabs').click(); //left nav expand area should be visible
        cy.get('.workspace').click(); //clicking on workspace should close any open tabs
        cy.get('.left-nav.expanded > .expanded-area').should('not.be.visible');
        cy.get('.my-work.expanded > .expanded-area').should('not.be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('not.be.visible');

        cy.get('.my-work > .tabs').click(); //my work expand area should be visible
        cy.get('.workspace').click(); //clicking on workspace should close any open tabs
        cy.get('.left-nav.expanded > .expanded-area').should('not.be.visible');
        cy.get('.my-work.expanded > .expanded-area').should('not.be.visible');
        cy.get('.learning-log.expanded > .expanded-area').should('not.be.visible');
    })
});