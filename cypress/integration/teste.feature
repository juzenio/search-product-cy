
Feature: Pesquisar produto no site

   Feature Description: o usuario faz uma pesquisa pelo produto desejado  e coloca no carrinho




@buscar
 Scenario: Pesquisar Produto pela barra de pesquisa com sucesso
    Given que eu entro no site
    And faço a buscar por "creatina"
    And clico em pesquisar
    And uma  lista com o resultado da creatina
    And clico em comprar
    And clico em ir para o carro
    Then produto adicionado ao carro

    @inexistente
     Scenario: Pesquisar Produto inexistente
    Given que eu entro no site
    And faço a buscar por "relegio"
    And clico em pesquisar
    And produto nao existente no site

   
    
 
   

     