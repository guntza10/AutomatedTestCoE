/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("บันทึกผลการพิจารณา", () => {
  it("payment ", () => {
    cy.visit("/tabee/Vertify");
    cy.get('div[class="ui fluid search selection dropdown"]')
      .click()
      .type("มหาวิทยาลัยปทุม")
      .then((div) => {
        cy.wrap(div).get('div[class="item"').click();
      });
    cy.wait(1000);
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(0)
      .then((div) => {
        cy.wrap(div).get("input").eq(1).type("มหาวิทยาลัยปทุม");
      });
    cy.wait(1000);
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(1)
      .then((div) => {
        cy.wrap(div).get("input").eq(2).type("0632122444");
      });
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('div[class="btn coe-red-white"]').eq(0).click();
    cy.wait(2500);
    cy.get('div[class="button-items-right clickable"]').eq(0).click();
    cy.wait(2500);
    cy.get('div[class="button-items-right clickable"]').eq(1).click();
    cy.wait(2500);
    cy.get('div[class="button-items-right button-modal-success clickable"]').click();
    cy.wait(2500);
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('input[placeholder="Card Number"]').type("4111 1111 1111 1111");
    cy.get('input[placeholder="Full Name"]').type("abc");
    cy.get('input[type="number"]').eq(0).type("08");
    cy.get('input[type="number"]').eq(1).type("28");
    cy.get('input[placeholder="CVV / CV2"]').type("123");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(10000);
    cy.get('button[class="btn-logout"]').click();
    cy.wait(1000);
    cy.get('td[class="text-mg"]')
      .eq(5)
      .then((td) => {
        cy.wrap(td).get("div").contains("รอพิจารณาผล");
      });
  });
});
