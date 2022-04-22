/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("ตรวจสอบเอกสาร", () => {
    cy.visit("/cmslogin");
    cy.get('input[placeholder="รหัสพนักงาน"]').type("999999");
    cy.get('input[placeholder="รหัสผ่าน"]').type("123456");
    cy.get('button[type="submit"]').contains(" เข้าสู่ระบบ ").click();

    cy.get('div[class="menu-name"]').contains("รับรองปริญญา").click();
    cy.get('div[class="tab-menu"]')
      .contains("จัดการข้อมูลใบรับรองมาตรฐานการศึกษา")
      .click();
    cy.wait(2500);
    cy.request({
      method: "get",
      url: "https://uatcoeapi.codenation.me/educationtabee/vw_request_education_certificate_status_info?$limit=10&service_type_id=29&$skip=0",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTA1MjU4ODcsImV4cCI6MTY1MzExNzg4NywiYXVkIjoiaHR0cHM6Ly91YXRjb2VhcGkuY29kZW5hdGlvbi5tZSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMjg2NzE0IiwianRpIjoiYTJlODk5M2YtYTA3OC00ZDM1LWJiNGUtYTZjZDk2NTA4MTZjIn0.3MkJKfj_XHdDMG8sAdxvhq-tGQFH0wLtH4nX_8fy-qs",
    }).then((result) => {
      const { body } = result;
      const { data } = body;
      const requestId = data[0].request_id;
      cy.visit(
        `/cmsEducation/ManageEducationalStandardsCertificateTabeeInfo/${requestId}`
      );
    });
    cy.wait(2500);

    cy.get('div[class="content-container"]')
      .eq(0)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(1)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(2)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(3)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(4)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(5)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(6)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(7)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(8)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(9)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(10)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(11)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(12)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(13)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(14)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(15)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(16)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(17)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(18)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(19)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();
    cy.get('div[class="content-container"]')
      .eq(20)
      .find('div[class="card-column-content detail"]')
      .eq(3)
      .find('label[class="custom-control-label"]')
      .eq(0)
      .click();

    cy.get('div[id="radio-slots-admin-approve_adjuct_1"]')
      .find('div[class="wait-approve"]')
      .eq(1)
      .click();
    cy.get("button").contains("บันทึกและส่งข้อความ").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();

    cy.get('div[id="radio-slots-admin-approve_adjuct_2"]')
      .find('div[class="wait-approve"]')
      .eq(1)
      .click();
    cy.get("button").contains("บันทึกข้อความ").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();

    cy.get('div[id="radio-slots-admin-approve_adjuct_3"]')
      .find('label[class="custom-control-label"]')
      .eq(1)
      .click();
    cy.get('i[class="ic la la-plus-circle"]').click();
    cy.get('input[placeholder="ชื่อ-นามสกุล"]').last().type("เดฟ จีโอ");
    cy.wait(2500);
    cy.get("button").contains("บันทึกผล").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(1000);
    cy.get("button").contains("แจ้งสมาชิก").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();

    cy.get('div[class="tab-menu-slide"]')
      .contains("ตารางแจกแจงรายวิชา")
      .click();
    cy.get('label[class="custom-control-label"]').eq(0).click();
    cy.get('button[class="submit-btn"]').click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2500);
    cy.get('button[class="submit-btn-green"]').click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();
  });
});
