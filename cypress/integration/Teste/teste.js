/// <reference types="Cypress" />




Given(/^que eu entro no site$/, () => {
	//cy.request('https://www.americanas.com.br/').its('status').should('eq', 200)
	cy.visit('https://www.gsuplementos.com.br/')
	
});



When(/^e faço a buscar por "([^"]*)"$/, (produto) => {
	cy.get('.flex-child-shrink > div.topo-busca > #busca > input').type(produto)
});




When(/^clico em pesquisar$/, () => {
	cy.get('.flex-child-shrink > div.topo-busca > #busca > button').click()
});



Then(/^uma  lista com o resultado da creatina$/, () => {
	//cy.get('[data-testid="mod-l"] > .sc-eCImPb').should('contain','celular')
	cy.url().should('include','?busca=creatina')
	
});


When(/^clico no produto escolhido$/, () => {
	
	cy.get(':nth-child(1) > .flex-dir-column > .flex-child-shrink > :nth-child(5) > .vitrine-botaoComprar').click()
	
	
	
});



When(/^clico no botao adicionar produto ao carrinho$/, () => {
	
   // cy.get(':nth-child(2) > [data-testid="attribute-item"]').click()
	
   cy.get('.text-center > .boxFinalizarCompra > #finalizarCompra > .botaoComprar').click()
   cy.wait(1000)
   cy.get('#finalizarPedido').click()
});



Then(/^produto adicionado ao carrinho$/, () => {

	cy.url().should('include','/carrinho/')
	cy.get('.carrinhoMain-top').then(resul=>{

		expect(resul).contain('MEU CARRINHO')
	})
	cy.screenshot({ clip: { x: 40, y: 40, width: 2000, height: 1200 } })
});











