class RightNav{
    getMyWorkTab(){
        return cy.get('#rightNavTabMy\\ Work.tab');
    }
    getMyWorkAreaCanvasItem(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item');
    }
    openMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getMyWorkAreaCanvasItem().should('be.visible');
    }
    closeMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getMyWorkAreaCanvasItem().should('not.be.visible');
    }

    getClassWorkTab(){
        return cy.get('#rightNavTabClass\\ Work.tab');
    }
    getClassWorkAreaCanvasItem(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .class-work > .list > .list-item');
    }
    openClassWorkTab(){
        this.getClassWorkTab().click({force:true});
        this.getClassWorkAreaCanvasItem().should('be.visible');
    }
    closeClassWorkTab(){
        this.getClassWorkTab().click({force:true});
        this.getClassWorkAreaCanvasItem().should('not.be.visible');
    }

}
export default RightNav;