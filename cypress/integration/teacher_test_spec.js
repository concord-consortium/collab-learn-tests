import Header from './elements/Header.js';
import RightNav from './elements/RightNav';
import LeftNav from './elements/LeftNav';
import Canvas from './elements/Canvas';
import Workspace from './elements/Workspace';
import TeacherDashboard from './elements/TeacherDashboard';

let qaClass = 10,
    qaOffering = 10,
    qaGroup = 10,
    problem = 2.3,
    studentArr=[15,16,17,18];
let teacher = 10;

let header = new Header,
    rightNav = new RightNav,
    leftNav = new LeftNav,
    canvas = new Canvas,
    workspace = new Workspace,
    teacherDashboard = new TeacherDashboard;

context('Teacher workspace',function(){ //does not have My Work tab and has Teacher in user name
    describe('Check header area for correctness', function(){

        it('set up group and will go to a teacher view of the site', function() {
            cy.setupGroup(studentArr);
            cy.visit('https://collaborative-learning.concord.org/branch/master/?appMode=qa&fakeClass='+qaClass+'&fakeUser=teacher:'+teacher+'&fakeOffering='+qaOffering+'&problem='+problem+'&qaGroup='+qaGroup);
        });

        it('will verify if class name is correct', function(){
            header.getClassName().should('contain',''+'Class '+qaClass);
        });
        it('will verify if group name is present', function(){
            teacherDashboard.getGroupName().should('contain',qaGroup).click();
            teacherDashboard.joinGroup();

            header.getGroupName().should('contain','Group '+qaGroup);
        });
        it('will verify group members is correct', function(){
            header.getGroupMembers().each(($member,index, $list)=> {
                expect(['S'+studentArr[0],'S'+studentArr[1],'S'+studentArr[2],'S'+studentArr[3]]).to.include($member.text());
            });
        });
        it('will verify student name is correct', function(){
            header.getUserName().should('contain','Teacher '+teacher);
        });
    });

    describe('Check right nav for correctness', function(){
       it('will verify that Class Work tab comes up and My Work tab is not visible', function(){
           rightNav.getClassWorkTab().should('be.visible');
           rightNav.getMyWorkTab().should('not.be.visible');
       })
    });

    describe('Check the student canvases restore correctly from Class Work', function(){

    });
});

