describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

         cy.get('#mail').type('USER_LOGIN'); // ввела верный логин
         cy.get('#pass').type('USER_PASSWORD'); // ввела верный пароль
         cy.get('#loginButton').click(); // нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверила, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
     })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

        cy.get('#mail').type('USER_LOGIN'); // ввела верный логин
        cy.get('#pass').type('USER_PASSWORD'); // ввела неверный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверила, что после попытки авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

        cy.get('#mail').type('USER_LOGIN'); // ввела неверный логин
        cy.get('#pass').type('USER_PASSWORD'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверила, что после попытки авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

        cy.get('#mail').type('USER_LOGIN'); // ввела логин без @
        cy.get('#pass').type('USER_PASSWORD'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверила, что после попытки авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
    })

    it('Проверка функции "восстановление пароля"', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

        cy.get('#forgotEmailButton').click(); // нажала кнопку "восстановить пароль"

        cy.get('#mailForgot').type('USER_LOGIN'); // ввела почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажала кнопку "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверила, что после запроса на восстановления вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
    })

    it('Проверка функции приведения к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверила цвет кнопки "восстановить пароль"

        cy.get('#mail').type('USER_LOGIN'); // ввела верный логин с верхним регистром
        cy.get('#pass').type('USER_PASSWORD'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверила, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // проверила, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверила, что крестик есть, и он виден для пользователя
    })

   })