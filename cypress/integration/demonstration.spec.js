describe('App initialization', () => {
    it('Loads a todo list on page load', () => {
        cy.seedAndVisit();

        cy.get('.todo-list li');
        cy.contains('todos');

    });
     
    it('Gets input bar', () => {

        // TODO 
        // Why does this test fail?
        cy.contains('What needs to be done?');
    });

    it('Adds correct new todo item on submit', () => {
        var str = 'Go to COMP 523';

        cy.get('.new-todo').type(str).should('have.value', str).type('{enter}');

        // TODO 
        // Check to do list to see if it contains new item after we enter it

    });

    it('Checks off a todo item and verify count', ()=>{
        cy.get('.todo-count').contains(5);
        cy.get('.todo-list li .toggle').eq(0).click();

        //TODO
        //Check todo count for correct number of items
    })

    it('Should not have the completed item in active list', () => {
        cy.get('.active').click();
        cy.get('.todo-list li').not('contains', 'Buy Milk');
    });

    it('Should have the completed item in completed list', () => {
        //TODO
        // Click on completed button (class .completed) 
        // and check that 'Buy Milk' is in that list
    });
});