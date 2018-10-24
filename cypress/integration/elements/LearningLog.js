class LearningLog {
    getLearningLogTab(){
        return cy.get('#learningLogTab');
    }

    getAllLearningLogCanvasItems(){
        return cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .logs > .list > .list-item');
    }

    getBottomNavExpandedSpace(){
        return cy.get('.bottom-nav.expanded');
    }

    openLearningLogCanvasItem(title){
        return cy.get('.learning-log > .list > .list-item[title*="'+title+'"]').click();
    }

    openLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getBottomNavExpandedSpace().should('be.visible');
    }

    closeLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getBottomNavExpandedSpace().should('not.be.visible');
    }
}

export default LearningLog;