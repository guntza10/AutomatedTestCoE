/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("นำเรื่องเข้าที่ประชุม", () => {
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

    cy.get('div[class="tab-menu-slide"]')
      .contains("แต่งตั้งผู้ตรวจประเมิน")
      .click();
    cy.get('input[placeholder="Search ชื่อ"]').type("ยรรยง");
    cy.get('button[class="filter-btn"]').click();
    cy.get('select[class="custom-select"]').select("1");
    cy.get('button[class="btn-add-inspector"]').click();

    cy.get('input[placeholder="Search ชื่อ"]').type("ชิงชัย");
    cy.get('button[class="filter-btn"]').click();
    cy.get('select[class="custom-select"]').select("2");
    cy.get('button[class="btn-add-inspector"]').click();

    cy.get('input[placeholder="Search ชื่อ"]').type("สฤ");
    cy.get('button[class="filter-btn"]').click();
    cy.get('select[class="custom-select"]').eq(0).select("3");
    cy.get('button[class="btn-add-inspector"]').eq(0).click();

    cy.get('button[class="btn-approve"]').click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();

    cy.get('label[class="custom-control-label"]').eq(3).click();
    cy.get('div[class="cancel-approve"]').click();
    cy.get("button").contains("บันทึกและส่งข้อความ").click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2500);

    cy.get('label[class="custom-control-label"]').eq(1).click();
    cy.get('div[class="pass"]').eq(0).click();
    cy.get("button").contains("บันทึกและส่งข้อความ").click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2500);

    cy.get('label[class="custom-control-label"]').eq(2).click();
    cy.get('div[class="pass"]').eq(1).click();
    cy.get("button").contains("บันทึกและส่งข้อความ").click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2500);

    cy.get('div[class="tab-menu-slide"]')
      .contains("กำหนดการตรวจเยี่ยมสถาบัน")
      .click();
    cy.get('input[placeholder="Date Start"]').type("2022-04-22");
    cy.get('input[placeholder="Date Stop"]').type("2022-05-22");
    cy.get('select[class="custom-select"]').eq(0).select("157");
    cy.get('select[class="custom-select"]').eq(1).select("1157");
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.get('button[class="btn-submit"]').click();
  });
});
