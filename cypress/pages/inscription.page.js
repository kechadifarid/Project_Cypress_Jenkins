class inscriptionPage {
    elements = {
        prenom: () => cy.get('#customer_firstName'),
        nom: () => cy.get("#customer_lastName"),
        confirmationMail: () => cy.get("#customer_emailConfirm"),
        pwd: () => cy.get("#customer_password"),
        dateNaissance: () => cy.get("#customer_birthday"),
        btnInscription: () => cy.get('#submitBtn'),
        legalMontion: () => cy.get('[for="legalmentions"]')
    }


    inscription(prenom, nom, email, pwd, date) {
        this.elements.prenom().type(prenom)
        this.elements.nom().type(nom)
        this.elements.confirmationMail().type(email)
        this.elements.pwd().type(pwd)
        this.elements.dateNaissance().type(date.replaceAll("o", ""), { force: true })
        this.elements.legalMontion().click()
        this.elements.btnInscription().click()
    }
}
export default new inscriptionPage()