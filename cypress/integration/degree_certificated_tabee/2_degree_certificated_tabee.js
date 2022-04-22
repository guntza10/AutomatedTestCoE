/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("Check documents pass", () => {
    cy.visit("/cmslogin");
    cy.get('input[placeholder="รหัสพนักงาน"]').type("999999");
    cy.get('input[placeholder="รหัสผ่าน"]').type("123456");
    cy.get('button[type="submit"]').contains(" เข้าสู่ระบบ ").click();
    cy.get('a[href="/cmsForeign/ManageCertificateACPEInformation"]').click();
    cy.wait(3000);
    cy.get('div[class="tab-menu"]').eq(3).click();
    // cy.get('td[class="tabeeNo"]').eq(0).click();
    cy.request({
      method: "get",
      url: "https://uatcoeapi.codenation.me/educationtabee/vw_request_education_certificate_status_info?$limit=10&service_type_id=28&$skip=0", // baseUrl is prepend to URL
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTA0MjY1NTcsImV4cCI6MTY1MzAxODU1NywiYXVkIjoiaHR0cHM6Ly91YXRjb2VhcGkuY29kZW5hdGlvbi5tZSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMjg2NzE0IiwianRpIjoiN2RjOTU5N2UtNDM3Ni00MmUzLTkwZWYtNmJiMjU5ODE3N2VhIn0.n16PeXjDDts3q1PpDW3cA4TULDy0itAhG9-ngAIP5qo",
    }).then((result) => {
      const { body } = result;
      const { data } = body;
      console.log("data: ", data);
      const requestId = data[0].request_id;
      cy.visit(
        `/cmsForeign/ManageEducationalStandardsCertificateTabeeInfo/${requestId}`
      );
    });
    cy.wait(5000);

    cy.get('label[class="custom-control-label"]').eq(0).click();
    cy.get('label[class="custom-control-label"]').eq(2).click();
    cy.get('div[class="wait-approve"]').eq(1).click();
    cy.get('button[class="submit-btn"]').eq(0).click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2000);
    cy.get('div[class="wait-approve"]').eq(3).click();
    cy.get('button[class="submit-btn"]').eq(1).click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2000);
    cy.get('label[class="custom-control-label"]').eq(9).click();

    cy.get('i[class="ic la la-plus-circle"]').click();
    cy.get('input[placeholder="ชื่อ-นามสกุล"]').type("เดฟ จีโอ");

    cy.get('button[class="submit-btn"]').eq(2).click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();

    cy.wait(2000);
    cy.get('button[class="submit-btn-green"]').click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2000);
  });
});
