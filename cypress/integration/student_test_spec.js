import Header from './elements/Header.js'

let student = '1',
    classroom = '5',
    offering = '1',
    problemSet = '1.1';

describe('Check header area for correctness', function(){

    const workspace = new Header();

    it('will verify if class name is correct', function(){
        workspace.getClassName().should('contain',''+'Class '+classroom);
    });
    it('will verify if group name is present', function(){
        workspace.getGroupName().should('contain','Group'+' ');
    });
    it('will verify group members is correct', function(){
        workspace.getGroupMembers().should('contain','S'+student);
    });
    it('will verify student name is correct', function(){
        workspace.getUserName().should('contain','Student '+student);
    });
});
describe('Students, class, group, problem combinations', function(){
    it('will test new student assigned to new class new group new problem', function(){

    });
    it('will test previous student assigned to a new class, new group, new problem', function(){

    });
    it('will test previous student assigned to previous class, previous group, new problem', function(){

    });
    it('will test previous student assigned to previous class, previous group, previous problem', function(){

    });
    it('will test previous student assigned to previous class, new group, new problem', function(){

    });
    it('will test previous student assigned to previous class, new group, old problem', function(){

    });
    it('will test previously logged in student assigned to new class, new group, previous problem', function(){

    });
})
