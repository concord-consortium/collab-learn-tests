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
        this.myWorkAreaCanvasItem().should('not.be.visible');
    }


}
export default RightNav;