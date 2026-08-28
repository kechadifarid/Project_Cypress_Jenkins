class orderPage {
    elements = {
        adress: () => cy.get("#user_input_autocomplete_address"),
        tel: () => cy.get('#subscription_deliveryContact_phoneNumber'),
        adressIntrouvable: () => cy.get(".address-toggle.text__small.text__underline").contains("Adresse introuvable ?"),
        numRue: () => cy.get("#subscription_deliveryContact_streetNumber "),
        nomRue: () => cy.get("#subscription_deliveryContact_addressFirstLine"),
        codePostal: () => cy.get("#subscription_deliveryContact_addressZipCode"),
        ville: () => cy.get("#subscription_deliveryContact_addressCity"),

        btnValider: () => cy.get('#submit-creation-form'),

        terms: () => cy.get('[for="terms"]'),
        payerBTN: () => cy.get("#submit-validation-form")

    }

    validationAdress(tel, numRue, nomRue, codePostal, ville) {
        this.elements.adressIntrouvable().click()
        this.elements.numRue().type(numRue)
        this.elements.nomRue().type(nomRue)
        this.elements.codePostal().type(codePostal)
        this.elements.ville().type(ville)
        this.elements.tel().type(tel)
        this.elements.btnValider().click()
    }
    accepterTerms() {
        this.elements.terms().click()
    }
    clickSurPayer() {
        this.elements.payerBTN().click()
    }
}
export default new orderPage()