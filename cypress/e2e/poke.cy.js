
describe('Тестирование покемонов', function () {
      it('покупкa нового фото для тренера', function () {
      cy.visit('https://pokemonbattle.me/');
      cy.get(':nth-child(1) > .auth__input').type('m.ordenova@yandex.ru');
      cy.get('#password').type('z11022006Z');
      cy.get('.auth__button').click();
      cy.get('.header__btns > [href="/shop"]').click();
      cy.get(':nth-child(10) > .shop__button').click();
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('3574382817255773');
      cy.get(':nth-child(1) > .pay_base-input-v2').type('0226');
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Masha Data');
      cy.get('.pay-btn').click();
      cy.get('.payment__submit-button').should('be.disabled');
      cy.get('#cardnumber').type('56456');
      cy.get('.payment__submit-button').should('be.visible');
      cy.get('.payment__submit-button').click();
      cy.get('.payment__info-button-v2').should('be.visible');
      cy.get('.payment__info-button-v2').click();
      cy.contains('Покупка прошла успешно').should('be.visible');
      cy.get('.payment__adv').click();
      cy.get(':nth-child(12) > .shop__button').click();
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2596797158076999');
      cy.get(':nth-child(1) > .pay_base-input-v2').type('0828');
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Masha Data');
      cy.get('.pay-btn').click();
      cy.get('.payment__submit-button').should('be.disabled');
      cy.get('#cardnumber').type('56456');
      cy.get('.payment__submit-button').should('be.visible');
      cy.get('.payment__submit-button').click();
      cy.get('.payment__info-button-v2').should('be.visible');
      cy.get('.payment__info-button-v2').click();
      cy.contains('Покупка прошла успешно').should('be.visible');
      cy.get('.payment__adv').click();
     cy.get('.header__container > .header__id').click();

   })

       it('покупкa нового фото для тренера (рандомная)', function () {
      cy.visit('https://pokemonbattle.me/');
      cy.get(':nth-child(1) > .auth__input').type('m.ordenova@yandex.ru');
      cy.get('#password').type('z11022006Z');
      cy.get('.auth__button').click();
      cy.get('.header__btns > [href="/shop"]').click();
      cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('3574382817255773');
      cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25');
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('DARINA PUGINA');
      cy.get('.pay-btn').click();
      cy.get('#cardnumber').type('56456');
      cy.get('.payment__submit-button').click();
      cy.get('.payment__field-defolt-for-success').should('be.visible');
      cy.get('.payment__adv').click();
            })
       

})
