import LeftNav from './elements/LeftNav'
import Canvas from './elements/Canvas'
import GraphToolTile from './elements/GraphToolTile'
import RightNav from './elements/RightNav'
import BottomNav from './elements/BottomNav';
import LearningLog from './elements/LearningLog';

context('Test Graph Tool', function(){
    let leftNav = new LeftNav;
    let canvas = new Canvas;
    let rightNav = new RightNav;
    let learningLog = new LearningLog;
    let graphToolTile = new GraphToolTile;
    describe('user can add points on a graph', function(){

       it('will add points to a graph', function(){
           leftNav.openLeftNavTab('Extra Workspace');
           leftNav.openToWorkspace();
          canvas.addGraphTile();
           graphToolTile.getGraphTile().last().click();
          graphToolTile.getGraphTile().last().click(40,35, {force:true});
           graphToolTile.getGraphTile().last().click(140,70, {force:true});
           graphToolTile.getGraphTile().last().click(260,50, {force:true});
           graphToolTile.getGraphTile().last().dblclick(260,50, {force:true});
       });
       // it('verify user can add polygons to the graph', function(){
       // //set up canvas
       // cy.get('#leftNavTab2').click();
       // cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
       // cy.get('.workspace > .titlebar > .title').should('contain',' if');

       //add graph tool onto canvas and adds points
       // cy.get('.single-workspace > .workspace > .toolbar > .tool.geometry').click({force: true});
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(40,35, {force:true});
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'A' );
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(140,70, {force:true});
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'B' );
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click(260,50, {force:true});
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'C' );
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool').last().click();
       // cy.get('.canvas-area > .canvas > .document-content > .tool-tile > .geometry-tool > .JXGtext').last().should('contain', 'D' );
       //
       // //TODO: add point to origin, y=0, and x=0
       //     it('will add a point at the origin', function(){
       //         // leftNav.openToWorkspace('Extra Workspace');
       //         canvas.addGraphTile();
       //         graphToolTile.getGraphTile().last().click(0,0, {force:true});
       //         // graphToolTile.getGraphTile().last().click(140,70, {force:true});
       //         // graphToolTile.getGraphTile().last().click(260,50, {force:true});
       //         // graphToolTile.getGraphTile().last().click();
       //         // graphToolTile.getGraphTile().last().dblclick();
       //     });
       // });

   });
   //  describe('verify user can create polygons', function(){
   //     expect(4).to.eq(3);
   //     //Spec:
   //     // -points will be connected in the order they were drawn/labeled (A, B, C, D, ...).
   //     // -shapes will have a transparent fill.
   //     // -points retain labels and coordinate listing
   //     // -shapes are saved with the geometry canvas.
   //     // -if there are only two points they will be connected with a single line.
   // });
});