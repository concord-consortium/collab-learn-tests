class RightNav{
    getMyWorkTab(){
        return cy.get('#rightNavTabMy\\ Work.tab');
    }

    getAllMyWorkAreaCanvasItems(){
        return cy.get('.right-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item');
    }

    openMyWorkAreaCanvasItem(title){
        return cy.get('.my-work > .list > .list-item[title*="'+title+'"]').click();
    }

    openMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getAllMyWorkAreaCanvasItems().should('be.visible');
    }

    closeMyWorkTab(){
        this.getMyWorkTab().click({force:true});
        this.getAllMyWorkAreaCanvasItems().should('not.be.visible');
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