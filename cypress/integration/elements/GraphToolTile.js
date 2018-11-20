class GraphToolTile{

    getBottomNavExpandedSpace(){
        return cy.get('.bottom-nav.expanded');
    }

    getGraphTile(){
        return cy.get('.canvas-area > .canvas > .document-content > .tile-row >  .tool-tile > .geometry-size-me > .geometry-tool');
    }

    getGraphPointText(){
        return cy.get('.canvas > .document-content > .tile-row> .tool-tile > .geometry-size-me > .geometry-tool');
    }

    addPointToGraph(x,y){
        this.getGraphTile().last().click(x,y, {force:true});
    }


}
export default GraphToolTile;