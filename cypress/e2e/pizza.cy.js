

describe("Pizza Form Tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
    const nameInput = () => cy.get("input[name=name]")
    const check1 = () => cy.get('input[name=pepperoni]')
    const check2 = () => cy.get('input[name=sausage]')
    const btn = () => cy.get("input[id=order-button]")
    it("check submit inputs", () => {
        nameInput().type("tommy")
        check1().check()
        check2().check()
        btn().click()
        nameInput().should("have.value", "")
    })
})




