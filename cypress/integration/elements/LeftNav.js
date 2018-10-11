class LeftNav{
    getLeftNavTabs(){
        return cy.get('.left-nav > .tabs > .tab');
    }

    openLeftNavTab(title){ //Not the best way. Need a better implementation
        switch(title){
            case 'Introduction':
                cy.get('#leftNavTab0').click({force:true});
                break;
            case 'Initial Challenge':
                cy.get('#leftNavTab1').click({force:true});
                break;
            case 'What if':
                cy.get('#leftNavTab2').click({force:true});
                break;
            case 'Now What':
                cy.get('#leftNavTab3').click({force:true});
                break;
            case 'Extra':
                cy.get('#leftNavTab4').click({force:true});
                break;
        }
    }

    getOpenToWorkspaceButton(){
        return cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button');
    }

    openToWorkspace() {
        this.getOpenToWorkspaceButton().click({force:true});
    }
}
export default LeftNav;