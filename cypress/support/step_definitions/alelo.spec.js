import Actions from '../../actions/alelo.actions';
import Hooks from '../hooks.js';

const action = new Actions();
const hooks = new Hooks();

/* Cenário: pesquisar um CEP e dar output das informações retornadas */
Given('estou na página de busca por CEP', () => {
  action.pageCEP();
});
  
When('faço uma pesquisa por CEP', () => {
  action.typeCEP(hooks.cep);
  action.search();
});
  
Then('dou output no unico resultado', () => {
  cy.get('table[class="tmptabela"] > tbody > tr > td:first-child').should('have.text', 'Rua Salustiano Silva ');
});

/* Cenário: pesquisar um logradouro que retorne mais de um resultado e dar output de todos os dados da tabela retornada */
Given('estou na página de busca por logradouro', () => {
  action.pageLocation();
});
  
When('faço uma pesquisa por logradouro', () => {
  action.selectUF();
  action.typeLocation(hooks.location);
  action.typeLogradouro(hooks.logradouro);
  action.search();
});
  
Then('dou output na primeira pagina de resultados', () => {
  for (let index = 2; index < 52; index++) {
    cy.get(`table[class="tmptabela"] > tbody > tr:nth-child(${index}) > td:nth-child(1)`).should(($div) => {
      const text = $div.text();
      console.log('LOGRADOURO = ', text);
    })
  } 
});