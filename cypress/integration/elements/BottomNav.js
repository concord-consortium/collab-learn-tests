class BottomNav{
    getLearningLogTab(){
        return cy.get('#LearningLogTab');
    }

    getAllLearningLogCanvasItems(){
        return cy.get('.bottom-nav > .expanded-area.expanded > .contents > .my-work > .list > .list-item');
    }

    openLearningLogCanvasItem(title){
        return cy.get('.learning-log > .list > .list-item[title*="'+title+'"]').click();
    }

    openLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getAllLearningLogCanvasItems().should('be.visible');
    }

    closeLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getAllLearningLogCanvasItems().should('not.be.visible');
    }


}
export default RightNav;