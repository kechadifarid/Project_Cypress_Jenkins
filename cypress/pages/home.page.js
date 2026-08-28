class homePage {
    elements = {
        iconBtn: () => cy.get('[aria-label="account"]'),
        newEmail: () => cy.get("#newEmail"),
        btnInscription: () => cy.get('[value="Inscription"]'),
        btnAcheter: () => cy.get(".nav-link").contains("acheter"),
        menuOpen: () => cy.get("#menu-button-open"),
        btnJeCraque: () => cy.get('[data-name="glplan12"]')
    }

    clickIcon() {
        this.elements.iconBtn().click()
    }
    saisirNewEmail(s) {
        this.elements.newEmail().type(s)
    }
    clickInscription() {
        this.elements.btnInscription().click()
    }
    clickerSurMenuOPen() {
        this.elements.menuOpen().click()
    }
    clickerSurAcheter() {
        this.elements.btnAcheter().click()
    }
    clickerSUrJeCraque() {
        this.elements.btnJeCraque().click()
    }
}
export default new homePage()