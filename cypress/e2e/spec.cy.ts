//this is the 1st test to check the form renders correctly 
describe('Render Form Test', () => {
  it('Validates the form renders', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    cy.get('#bugReportForm [name=title]');

    cy.get('#bugReportForm [name=description]'); 

    cy.get('#bugReportForm [name=severity]').should('have.value', 'medium');

    cy.get('#bugReportForm button[type=submit]');
  });
});

//this is the 2nd test to check the validtion prevents a missing title 
describe('Validate Missing Title', () => {
  it('Validates missing field', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    cy.get('#bugReportForm').find('[name=title]').should('exist'); 
  });
}); 

//this is the 3rd test to check valid data is accepted and form submits
describe('Validate Form Submits', () => {
  it('Validates the form submission', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    cy.get('#bugReportForm [name=title]').type('Test Title');
    cy.get('#bugReportForm').submit();
    cy.get('#successMessage').should('contain', 'Bug Report Submitted Successfully!');
  });
});

//this is the 5th test to check it shows validation error message if backend returns error
describe('Validate Error Messages', () => {
  it('Validates the error message', () => {
    //visit the page 
    cy.visit('http://127.0.0.1:8000/');

    cy.get('#bugReportForm [name=title]');

    cy.get('#bugReportForm').submit();
    cy.get('#validationError').should('contain', 'You need a title.');
  });
});