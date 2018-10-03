describe('Test Left tabs',function(){
 it('will verify the transfer of the tab info to the canvas', function(){
     cy.get('.left-nav > .tabs > .tab').each(($tab, index, $list)=>{
         let title = $tab.text();
         cy.wrap($tab).click({force:true});
         cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').should('contain', title).click();
         cy.get('.single-workspace > .workspace > .titlebar > .title').should('contain', title);
     })

 });


});