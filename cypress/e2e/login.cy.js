describe('Тестирование формы логина и пароля', function () {

     it('ввожу верный логин и пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.contains('Авторизация прошла успешно').should('be.visible');
        })

        
        it('восстановления пароля', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль').should('be.visible');
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
        })
        
        it('ввожу верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#pass').type('ifghjjcudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка при входе активна
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('ввожу неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('german@ya.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка при входе активна
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('тест на валидацию вводимых данных', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled'); //кнопка при входе задизейблена
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled'); //кнопка при входе активна
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
        })

        it('тест на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio//');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

})