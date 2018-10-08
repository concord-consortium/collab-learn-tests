context('Test group functionalities', function(){
    context('test the views', function(){
        describe('set-up for 4-up view tests', function(){
            it.only('will enter text into the 1-up canvas', function(){
                // Manually create students to go into Group
                let qaClass = 10,
                    qaOffering = 10,
                    qaGroup = 10,
                    problem = 2.3;
                cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:15&fakeOffering='+qaOffering+'&problem=2.3');
                cy.wait(5000);
                cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:16&fakeOffering='+qaOffering+'&problem=2.3');
                cy.wait(5000);
                cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:17&fakeOffering='+qaOffering+'&problem=2.3');
                cy.wait(5000);
                cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&qaGroup='+qaGroup+'&fakeClass='+qaClass+'&fakeUser=student:18&fakeOffering='+qaOffering+'&problem=2.3');
                cy.wait(1000);
                //verify Group num and there are 4 students in the group
                cy.get('.app-container > .header > .group > .name').should('contain','Group 10');
                cy.get('.app-container > .header > .group > .members > .member').each(($member,index, $list)=>{
                    expect(['S15','S16','S17','S18']).to.include($member.text());
                });
                cy.get('#leftNavTab3').click();
                cy.get('.left-nav-panel > .section > .canvas > .document-content > .buttons > button').click();
                cy.get('.single-workspace > .document > .toolbar > .tool.text').click({force: true});
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().type('This is to test the 4-up view');
                cy.get('.canvas-area > .canvas > .document-content > .tile-row > .tool-tile > .text-tool').last().should('contain', '4-up');
            });
            it('will change single canvas to 4-up view', function(){
                cy.get('.workspace > .titlebar > .actions > .icon-up1').click();
            });

        });
        describe('test the 4-up view', function(){
            it("will move horizontal splitter vertically and verify canvas size change", function () {
                cy.get('.canvas-area > .four-up > .horizontal.splitter').trigger('mousedown',{which:1}, {force:true}).trigger('mousemove',{pageX:243, pageY: 175}, {force:true}).trigger('mouseup',{force:true});
                cy.get('.canvas-area > .canvas-container.north-west').should('have.css','height').and('less.than', 243);
                cy.get('.canvas-area > .canvas-container.south-east').should('have.css','height').and('greater.than', 243);

            });
            it('will move vertical splitter horizantally and verify canvas size change', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will move the center handle horizontally and vertically and verify canvas size change', function (){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will verify editing own canvas is still possible in 4-up view', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will verify editing is not allowed in other group members\' canvas', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will copy text from one canvas to own canvas', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will verify that view changes back to 1-up view',function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });

        });
        describe('test the 2-up view', function(){
            it('will verify 2-up view still comes up even in 4-up view', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
        });

        describe('test sharing and unsharing canvases', function(){
            it('will share canvas and verify canvas is visible in groupmates 4-up view', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('will unshare canvas and verify canvas is not visible in groupmates 4-up view', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('restore a 4-up canvas where a groupmate has shared a canvas while it was not open', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('restore a 4-up canvas where a groupmate has unshared a canvas while it was not open', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
        });

        describe('test copy and paste from another canvas to another canvas', function(){
            it('verify that student can copy text field from another student canvas into own', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('verify that student can copy graph field from another student canvas into own', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('verify that student cannot copy text field from own canvas into another student canvas', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('verify that student cannot copy graph field from own canvas into another student', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
            it('verify student cannot copy text and graph field from another student to another student', function(){
                cy.log('need to write this test');
                expect(4).to.equal(3);
            });
        });

    });
});