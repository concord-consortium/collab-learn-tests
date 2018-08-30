
describe('Test Left tabs',function(){
 it('will verify correct tab opens to correct content', function(){
     cy.get('.left-nav > .tabs').find('.tab').as('tabs');
     this.tabs.forEach(function(){
         //get the tab label
         //click on tab (check to see if this is the first time the tab is clicked, because the second click to the tab will close the expanded area
         //verify that epanded area is showing
         //verify that the expanded area title corresponds to the tab label
         //repeat for every tab.
     });
 });
 it('will verify the transfer of the problem to the canvas', function(){

 });


});