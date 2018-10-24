class LearningLog {
    getLearningLogTab(){
        return cy.get('#learningLogTab');
    }

    getAllLearningLogCanvasItems(){
        return cy.get('.bottom-nav > .expanded-area > .contents > .learning-log > .logs > .list > .list-item');
    }

    getLearningLogCanvasItemTitle(){
        return cy.get('.learning-log > .logs > .list > .list-item > .info > .title');
    }

    getBottomNavExpandedSpace(){
        return cy.get('.bottom-nav.expanded');
    }

    getLLCanvasTitle(){
        return cy.get('.learning-log > .workspaces > .single-workspace > .document > .titlebar > .title');
    }

    openLearningLogCanvasItem(title){
         cy.get('.learning-log > .logs > .list > .list-item > .info > .title[title*="'+title+'"]').parent().parent().click();
    }

    selectSpecificLLCanvasTitle(title){
        cy.get('.learning-log > .logs > .list > .list-item > .info > .title[title*="'+title+'"]').click();
    }

    createButton(){
        return cy.get('.learning-log > .logs > button');
    }

    getLLTextTool(){
        return cy.get('.learning-log > .workspaces > .single-workspace > .toolbar > .tool.text');
    }

    getLLTextTile(){
        return cy.get('.learning-log-canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool')
    }

    getLLGraphTool(){
        return cy.get('.learning-log > .workspaces > .single-workspace > .toolbar > .tool.geometry');
    }

    getLLGraphTile(){
        return cy.get('.learning-log-canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-size-me> .geometry-tool');
    }

    getLLGraphPointText(){
        return cy.get('.learning-log-canvas-area > .canvas > .document-content > .tile-row> .tool-tile > .geometry-size-me > .geometry-tool > .JXGtext');
    }

    getLLImageTool(){
        return cy.get('.learning-log > .workspaces > .single-workspace > .toolbar > .tool.image')
    }

    openLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getBottomNavExpandedSpace().should('be.visible');
    }

    closeLearningLogTab(){
        this.getLearningLogTab().click({force:true});
        this.getBottomNavExpandedSpace().should('not.be.visible');
    }

    createLearningLog(title){
        this.openLearningLogTab();//open Learning log
        this.createButton().click();
        cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Create Learning Log');
        cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').type(title);
        cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
        this.getLearningLogCanvasItemTitle().should('contain',title);
    }

    renameLearningLog(title) {
        cy.get('.dialog > .dialog-container > .dialog-title').should('contain', 'Renaming Learning Log');
        cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-input > input').clear().type(title);
        cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton').click();
    }

    addLLTextTile(text){
        this.getLLTextTool().click();
        this.getLLTextTile().last().type(text);
        this.getLLTextTile().last().should('contain', text);
    }

    addLLGraphTile(){
        this.getLLGraphTool().click({force: true});
        this.getLLGraphTile().last().click();
        this.getLLGraphTile().last().click(); //Adds a point on the graph
        this.getLLGraphPointText().last().should('contain', 'A' );
        this.addLLPointToGraph(40,35);
        this.getLLGraphPointText().last().should('contain', 'B' );
        this.addLLPointToGraph(240,70);
        this.getLLGraphPointText().last().should('contain', 'C' );
        this.addLLPointToGraph(40,170);
        this.getLLGraphPointText().last().should('contain', 'D' );
    }

    addLLImageTile(){
        this.getLLImageTool().click({force:true});
    }

    addLLPointToGraph(x,y){
        this.getLLGraphTile().last();
        cy.get('.learning-log-canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .geometry-size-me > .geometry-tool').last().click(x,y, {force:true});
    }

}

export default LearningLog;