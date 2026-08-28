///<reference types= 'cypress' />
import homePage from "../pages/home.page";
import inscriptionPage from "../pages/inscription.page";
import { faker, fakerFR } from '@faker-js/faker';
import orderPage from "../pages/order.page";


const email = faker.person.firstName() + faker.person.firstName() + 145647687431 + "@dodo.fr"
const password = faker.internet.password({
    length: 12,
    memorable: false,
    pattern: /[A-Za-z0-9!@#$%^&*]/,
}) + "@aA1";
const prenom = faker.person.firstName()
const nom = faker.person.firstName()
const dateNaissance = faker.date.birthdate({
    min: 18,
    max: 80,
    mode: 'age',
})
const dateNaissanceFR = dateNaissance.toLocaleDateString('fr-FR').replaceAll("/", "");
const streetAddress = fakerFR.location.streetAddress()

const tel = fakerFR.phone.number()


beforeEach(() => {
    cy.visit("https://glowria.com/")
})
it('Inscription', () => {
    homePage.clickIcon()
        //saisir le mail 
    homePage.saisirNewEmail(email)
        //click sur inscription 
    homePage.clickInscription()
        //on verifie si on est rediriger vers l url d inscription 
    cy.url().should('contain', '/signup')
    console.log(dateNaissanceFR)
        //remplir le formulaire d inscription et clicker sur le button 
    inscriptionPage.inscription(prenom, nom, email, password, dateNaissanceFR)
    homePage.clickerSurMenuOPen()
        //clicker sur acheter 
    homePage.clickerSurAcheter()
        //click sur je craque d un produit 
    homePage.clickerSUrJeCraque()
        //verfier qu'on sur url order 
    cy.url().should('contain', '/order')
        //remplir adress 
    orderPage.validationAdress(tel, streetAddress.split(" ")[0], streetAddress.split(" ")[1], fakerFR.location.zipCode(), fakerFR.location.city())
        //accpter les terms 
    orderPage.accepterTerms()
        //click sur payer 
    orderPage.clickSurPayer()
        //verifier qu on est sur la bonne url 
    cy.origin('https://secure.payzen.eu', () => {
        cy.url().should('include', 'vads-payment');
    });
});