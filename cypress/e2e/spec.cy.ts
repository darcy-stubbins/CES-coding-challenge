//this is the test to check the form renders correctly 
describe('Render Form Test', () => {
  it('Validates the form renders', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    //test the title is there 
    cy.get('#bugReportForm [name=title]');

    //test that the description is there 
    cy.get('#bugReportForm [name=description]'); 

    //test that the severity is there 
    cy.get('#bugReportForm [name=severity]').should('have.value', 'medium');

    //test the submit button 
    cy.get('#bugReportForm button[type=submit]');
  });
});

//this is the test to check the validtion prevents a missing title 
describe('Validate Title Test', () => {
  it('Validates the title input', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    //validate the title field is populated
    cy.get('#bugReportForm [name=title]');

    cy.get('#bugReportForm').submit();
    cy.get('#validationError').should('contain', 'You need a title.');
  });
});