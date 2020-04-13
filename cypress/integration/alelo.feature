# language: pt
# encoding: utf-8

Funcionalidade: Desafio Alelo

  Cenário: pesquisar um CEP e dar output das informações retornadas
    Dado estou na página de busca por CEP
    Quando faço uma pesquisa por CEP
    Então dou output no unico resultado

  Cenário: pesquisar um logradouro que retorne mais de um resultado e dar output de todos os dados da tabela retornada
    Dado estou na página de busca por logradouro
    Quando faço uma pesquisa por logradouro
    Então dou output na primeira pagina de resultados