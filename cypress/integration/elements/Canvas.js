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


}

export default Canvas;