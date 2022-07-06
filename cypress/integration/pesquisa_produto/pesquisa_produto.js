/// <reference types="Cypress" />





Given(/^que eu entro no site$/, () => {
	cy.request('https://www.gsuplementos.com.br/').its('status').should('eq', 200)
	cy.visit('https://www.gsuplementos.com.br/')
	
	

});



When(/^faço a buscar por "([^"]*)"$/, (produto) => {
	cy.get('.flex-child-shrink > div.topo-busca > #busca > input').type(produto)
});





When(/^clico em pesquisar$/, () => {
	cy.get('.flex-child-shrink > div.topo-busca > #busca > button').click()
	
});



Then(/^uma  lista com o resultado da creatina$/, () => {
	
	cy.url().should('include','?busca=creatina')
	
});





When(/^clico em comprar$/, () => {

	cy.get(':nth-child(1) > .flex-dir-column > .flex-child-shrink > :nth-child(5) > .vitrine-botaoComprar').click()
	cy.get('.text-center > .boxFinalizarCompra > #finalizarCompra > .botaoComprar').click()
});


When(/^clico em ir para o carro$/, () => {
	
  // cy.wait(1000)
   cy.get('#finalizarPedido', { timeout:1000 } ).click()

});



Then(/^produto adicionado ao carro$/, () => {

	cy.url().should('include','/carrinho/')
	cy.get('.carrinhoMain-top').then(resul=>{

		expect(resul).contain('MEU CARRINHO')
	})
	cy.screenshot({ clip: { x: 40, y: 40, width: 2000, height: 1200 } })
	
});



When(/^produto nao existente no site$/, () => {
	cy.url().should('include','?busca=relegio')
	cy.get('.small-up-1 > span').should('contain','Nenhum produto encontrado.')
	cy.screenshot({ clip: { x: 40, y: 40, width: 2000, height: 1200 } })


});


















