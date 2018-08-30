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
                title:'',
                subtitle:''
            },
            {
                number:'2.2',
                title:'',
                subtitle:''
            },
            {
                number:'2.3',
                title:'',
                subtitle:''
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