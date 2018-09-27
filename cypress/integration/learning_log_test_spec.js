before(function(){
    cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=demo&demoClass=2&demoUser=student:1&demoOffering=4&problem=1.1');
});

describe('Test right tabs', function(){
    it('will verify correct tab opens to correct content', function(){
        cy.get('.learning-log > .tabs > .tab').each(function(tab) {
            cy.log('Tab is' + tab);
            //get the tab label
            //click on tab (check to see if this is the first time the tab is clicked, because the second click to the tab will close the expanded area
            //verify that epanded area is showing
            //verify that the expanded area title corresponds to the tab label
            //repeat for every tab.
        });
    });
    describe('Test saving a canvas',function(){
       it('will click on Create and verify canvas is saved', function(){
           cy.log('need to write this test');

       });
    });

});