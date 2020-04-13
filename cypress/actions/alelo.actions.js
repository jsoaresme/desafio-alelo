class Actions {

  pageCEP() {
    cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}/sistemas/buscacep/buscaCepEndereco.cfm`);
  }

  pageLocation() {
    cy.visit(`${Cypress.env('CYPRESS_BASE_URL')}/sistemas/buscacep/buscaCep.cfm`);
  }
  
  typeCEP(cep) {
    cy.get('input[name="relaxation"]').type(cep);
  }

  search(cep) {
    cy.get('input[type="Submit"]').click();
  }

  outputResult() {
    cy.get('table[class="tmptabela"] > tbody > tr > td:first-child').click();
  }

  selectUF() {
    cy.get('select[name="UF"]').select('RJ');
  }

  typeLocation(location) {
    cy.get('input[name="Localidade"]').type(location);
  }

  typeLogradouro(logradouro) {
    cy.get('input[name="Logradouro"]').type(logradouro);
  }

}

export default Actions;
