/// <reference types= "cypress"/>

    describe('iFrame testing', () =>{
        //1
    it('interacting with iFrame', () => {
        cy.visit('http://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('p').clear()
        cy.contains('button', 'Format').click().then(Format =>{
            cy.contains('Bold').click()
            cy.wrap(Format).click()
            cy.contains('Background color').trigger('mouseover')
            cy.get('[title="Red"]').click()
            
        })
            cy.get('@iframe').find('p').then(iFrame =>{
                cy.wrap(iFrame).type('This is an iFrame test')
                cy.wrap(iFrame).find('span').eq(1).should('contain', 'This is an iFrame test').and('have.css', 'background-color','rgb(224, 62, 45)')
            })
  
    })
        //2
        it('drag and drop', () =>{
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop')

        const dataTransfer = new DataTransfer;

        cy.get('#column-a').should('contain', 'A')
        cy.get('#column-b').should('contain', 'B')


        cy.get('#column-a').trigger('dragstart', { dataTransfer })
        cy.get('#column-b').trigger('drop', { dataTransfer })
        cy.get('#column-a').trigger('dragend')

        cy.get('#column-b').should('contain', 'A');
        cy.get('#column-a').should('contain', 'B');
        

    })
})