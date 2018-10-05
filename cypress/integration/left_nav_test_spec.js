describe('Test Left tabs',function(){
 it('will verify the transfer of the tab info to the canvas', function(){
    let titleArr = [], i=0;

     cy.get('.left-nav > .tabs > .tab').each(($tab, index, $tabList)=>{
         titleArr.push($tab.text());
     }).then(($tab)=> {

         for (i = 0; i < $tab.length - 1; i++) {
             let title = $tab.text;
             cy.get('#leftNavTab' + i).click({force:true});
                 cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').should('contain', titleArr[i]).click({force: true});
                     cy.get('.single-workspace > .document > .titlebar > .title').should('contain', titleArr[i]);
         }
     })

     // cy.get('.left-nav > .tabs > .tab').each(($tab, index, $tabList)=>{
     //     let title = $tab.text();
     //     cy.wrap($tab).click({force:true});
     //     cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').should('contain', title).click({force:true});
     //     cy.get('.single-workspace > .document > .titlebar > .title').should('contain', title);
     // })
 });
});