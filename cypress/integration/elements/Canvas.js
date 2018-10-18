class Canvas{

    getCanvasTitle(){
        return cy.get('.single-workspace > .document > .titlebar > .title');
    }

    getPublishIcon(){
        return cy.get('.document > .titlebar > .actions > .icon-publish');
    }

    getDialogTitle(){
        return cy.get('.dialog > .dialog-container > .dialog-title');
    }

    getDialogOKButton(){
        return cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #okButton');
    }

    getDialogCancelButton(){
        return cy.get('.dialog > .dialog-container > .dialog-contents > .dialog-buttons > #cancelButton');
    }

    publishCanvas(){
        this.getPublishIcon().click()
            .then(()=>{
                this.getDialogTitle().should('exist').contains('Published');
                this.getDialogOKButton().click();
                this.getDialogTitle().should('not.exist');
                this.getPublishIcon().should('exist');
            });
    }

    getFourUpViewToggle(){
        return cy.get('.document > .titlebar > .actions > .icon-up1');
    }

    openFourUpView(){
        this.getFourUpViewToggle().click();
        this.getFourUpView().should('be.visible');
    }

    getFourToOneUpViewToggle(){
        return cy.get('.document > .titlebar > .actions > .icon-up');
    }

    openOneUpViewFromFourUp(){
        this.getFourToOneUpViewToggle().click();
        this.getSingleCanvas().should('be.visible');
    }

    getSingleCanvas(){
        return cy.get('.canvas-area > .canvas');
    }

    getFourUpView(){
        return cy.get('.canvas-area > .four-up');
    }

    getNorthEastCanvas(){
        return cy.get('.canvas-area > .four-up >.canvas-container.north-east');
    }
    getNorthWestCanvas(){
        return cy.get('.canvas-area > .four-up >.canvas-container.north-west');
    }
    getSouthEastCanvas(){
        return cy.get('.canvas-area > .four-up >.canvas-container.south-east');
    }
    getSouthWestCanvas(){
        return cy.get('.canvas-area > .four-up >.canvas-container.south-west');
    }

    getShareButton(){
        return cy.get('.document > .titlebar > .actions > .icon-share');
    }

    shareCanvas(){
        this.getShareButton().click();
    }

    getUnshareButton(){
        return cy.get('.document > .titlebar > .actions > .icon-unshare');
    }

    unshareCanvas(){
        this.getUnshareButton().click();
    }

    getToolPalette(){
        return cy.get('.single-workspace > .document > .toolbar');
    }

    addTextTile(){
        return cy.get('.single-workspace > .document > .toolbar > .tool.text').click({force:true});
    }

    getTextTile(){
        return cy.get('.canvas > .document-content > .tile-row > .tool-tile > .text-tool.editable');
    }

    enterText(text){
        this.getTextTile().last().click({force:true});
        this.getTextTile().last().type(text);
        this.getTextTile().last().should('contain',text);
    }

    addText(text){
        this.getTextTile().last().type(text);
        this.getTextTile().last().should('contain',text);
    }

    deleteText(text){
        this.getTextTile().last().type(text);
        this.getTextTile().last().should('not.contain', 'delete');
    }

    addGraphTile(){
        return cy.get('.single-workspace > .document > .toolbar > .tool.geometry').click({force: true});
    }

    getGraphTile(){
        return cy.get('.canvas-area > .canvas > .document-content > .tile-row >  .tool-tile > .geometry-size-me > .geometry-tool');
    }

    getGraphPointText(){
        return cy.get('.canvas > .document-content > .tile-row> .tool-tile > .geometry-size-me > .geometry-tool');
    }

    addPointToGraph(x,y){
        this.getGraphTile().last();
        cy.get('.canvas > .document-content > .tile-row > .tool-tile > .geometry-size-me > .geometry-tool').last().click(x,y, {force:true});
    }

    addImageTile(){
        return cy.get('.single-workspace > .document > .toolbar > .tool.image').click({force: true});
    }

    getImageTile(){
        return cy.get('.canvas > .document-content > .tile-row> .tool-tile > .image-tool');
    }

    getDeleteTool(){
        return cy.get('.single-workspace > .document > .toolbar > .tool.delete').click({force: true});
    }

    deleteTile(tile){
        switch(tile) {
            case 'text':
                this.getTextTile().last().click();
            case 'graph':
                this.getGraphTile().last.click();
            case 'image':
                this.getImageTile().last().click();
        }
        this.getDeleteTool();
    }

    scrollToBottom(){
        cy.get('.canvas-area > .canvas').scrollTo('bottom');
    }

    scrollToTop(){
        cy.get('.canvas-area > .canvas').scrollTo('top') ;
    }

    getSupportList(){
        return cy.get('.statusbar > .supports > .supports-list > span');
    }

    getSupportTitle(){
        return cy.get('.visible-supports > .supports-list > div > span')
    }

    getTwoUpViewToggle(){
        return cy.get('.statusbar > .actions > .icon-up2');
    }
    getTwoToOneUpViewToggle(){// from 2up view
        return cy.get('.left-workspace > .document > .statusbar > .actions > .icon-up');
    }

    getRightSideWorkspace(){
        return cy.get('.right-workspace > .comparison-placeholder')
    }
    getLeftSideWorkspace(){
        return cy.get('.left-workspace > .document > .canvas-area > .canvas');
    }
     openTwoUpView(){
        this.getTwoUpViewToggle().click({force:true});
        this.getRightSideWorkspace().should('be.visible');
        this.getLeftSideWorkspace().should('be.visible');

     }

     openOneUpViewFromTwoUp(){
        this.getTwoToOneUpViewToggle().click({force:true});
        this.getSingleCanvas().should('be.visible');
     }
}

export default Canvas;