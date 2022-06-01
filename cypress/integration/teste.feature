
Feature: Buscando produto no site

   Feature Description: o usuario faz uma pesquisa pelo produto desejado  e coloca no carrinho

 Scenario: Buscar Produto pela barra de pesquisa com sucesso
    Given que eu entro no site
    And e faço a buscar por "creatina"
    And clico em pesquisar
    And uma  lista com o resultado da creatina
    And clico no produto escolhido
    And clico no botao adicionar produto ao carrinho
    Then produto adicionado ao carrinho

