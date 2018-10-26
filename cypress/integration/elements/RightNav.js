class RightNav{
    getRightNavTabs(){
        return cy.get('.right-nav > .tabs > .tab');
    }
    getMyWorkTab(){
        return cy.get('#rightNavTabMy\\ Work.tab');
    }
    getRightNavExpandedSpace(){
        return cy.get('.right-nav > .expanded-area.expanded');
    }

    getAllMyWorkAreaCanvasItems(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item');
    }

    openMyWorkAreaCanvasItem(title){
        cy.get('.my-work > .list > .list-item[title*="'+title+'"]').click();
    }

    openMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getRightNavExpandedSpace().should('be.visible');
    }

    closeMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getRightNavExpandedSpace().should('not.be.visible');
    }

    getClassWorkTab(){
        return cy.get('#rightNavTabClass\\ Work.tab');
    }

    getClassWorkAreaCanvasItem(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item');
    }

    getAllClassWorkAreaCanvasItems(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item');
    }

    openClassWorkAreaCanvasItem(title){
        cy.get('.class-work > .list > .list-item > .info > div:contains("'+title+'")').parent().parent().click();
    }

    openClassWorkTab(){
        this.getClassWorkTab().click({force:true});
        this.getRightNavExpandedSpace().should('be.visible');
    }

    closeClassWorkTab(){
        this.getClassWorkTab().click({force:true});
        this.getRightNavExpandedSpace().should('not.be.visible');
    }


}
export default RightNav;