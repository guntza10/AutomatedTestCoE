/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("ตรวจสอบกำหนดการ + ชำระเงินค่าตรวจเยี่ยม", () => {
    cy.visit("/degree_certification/Vertify");
    cy.contains("ชื่อมหาวิทยาลัย").type("มหาวิทยาลัยปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[type="text"]').eq(1).type("0632122444");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('div[class="btn coe-red-white"]').eq(0).click();
    cy.wait(2500);

    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('div[class="button-items-right clickable"]').click();
    cy.get(
      'div[class="button-items-right button-modal-success clickable"]'
    ).click();
    cy.wait(2500);

    cy.get('div[class="button-items-right clickable"]').click();
    cy.get('input[placeholder="Card Number"]').type("4111 1111 1111 1111");
    cy.get('input[placeholder="Full Name"]').type("abc");
    cy.get('input[placeholder="MM"]').type("08");
    cy.get('input[placeholder="YY"]').type("28");
    cy.get('input[placeholder="CVV / CV2"]').type("123");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(10000);

    cy.get('button[class="btn-logout"]').click();

    cy.get('tr[class="line-table"]')
      .eq(0)
      .find('td[class="text-mg"]')
      .eq(5)
      .find("div")
      .contains("รอพิจารณาผล")
      .should("be.visible");
  });
});
