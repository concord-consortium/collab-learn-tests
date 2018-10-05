describe('Test right nav tabs', function(){
    function openLeftNavCanvases(){
        cy.get('.left-nav > .tabs > .tab').each(($tab,index,$tabList)=>{})
            .then(($tabList)=>{
                var i=0;
                for (i=0;i<$tabList.length;i++){
                    cy.get('#leftNavTab'+i).click({force:true});
                    cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click({force:true});
                }
            });
    }
    function publishCanvases(){
        cy.get('.left-nav > .tabs > .tab').each(($tab,index,$tabList)=>{})
            .then(($tabList)=>{
                var i=0;
                for (i=0;i<$tabList.length;i++){
                    cy.get('#leftNavTab'+i).click({force:true});
                    cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click({force:true});
                    cy.get('.document > .titlebar > .actions > .icon-publish').click();
                    cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Published');
                    cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
                    cy.get('.dialog > .dialog-container > .dialog-title').should('not.exist');
                    cy.get('.document > .titlebar > .actions > .icon-publish').should('exist');                }
            });
    }

    //This assumes there were canvases previously created from the left nav tabs
    it('verify that opened content is listed in My Work tab space', function(){ //still need to verify the titles match the titles from opened canvases
        openLeftNavCanvases();
        cy.wait(3000);
        cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
        cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item').each(($item,index,$list)=>{
                cy.log('Title is ' + $item.text());
            });
    });
    it('will open the correct canvas selected from the My Work list', function(){
        cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
        cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
        cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item').each(($item,index,$list)=>{
                let title= $item.text().replace(/[^\x00-\x7F]/g, "");
                cy.wrap($item).click();
                cy.get('.single-workspace > .document > .titlebar > .title')
                    .then(($canvasTitle)=>{
                        let canvasTitle=$canvasTitle.text();
                        expect($canvasTitle.text()).to.contain(title);
                });
                cy.get('#rightNavTabMy\\ Work.tab').click({force:true});
                cy.wait(1000);
        });
    });
    it.only('will open correct canvas from Class Work list', function(){ //this assumes there are published work
        publishCanvases();
        cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
        // cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
        cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item').each(($item,index,$list)=>{
            let title= $item.text().replace(/[^\x00-\x7F]/g, "").split('Group');
            cy.wrap($item).click();
            cy.get('.single-workspace > .document > .titlebar > .title')
                .then(($canvasTitle)=>{
                    let canvasTitle=$canvasTitle.text();
                    expect($canvasTitle.text()).to.contain(title[0]);
                });
            cy.get('#rightNavTabClass\\ Work.tab').click({force:true});
            cy.wait(1000);
        });
    })
});
