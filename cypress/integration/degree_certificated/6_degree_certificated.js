/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  // it("บันทึกผลการพิจารณา ปฏิเสธคำขอ", () => {
  //   cy.visit("/cmslogin");
  //   cy.get('input[placeholder="รหัสพนักงาน"]').type("999999");
  //   cy.get('input[placeholder="รหัสผ่าน"]').type("123456");
  //   cy.get('button[type="submit"]').contains(" เข้าสู่ระบบ ").click();

  //   cy.get('div[class="menu-name"]').contains("รับรองปริญญา").click();
  //   cy.get('div[class="tab-menu"]')
  //     .contains("จัดการข้อมูลใบรับรองมาตรฐานการศึกษา")
  //     .click();
  //   cy.wait(2500);
  //   cy.request({
  //     method: "get",
  //     url: "https://uatcoeapi.codenation.me/educationtabee/vw_request_education_certificate_status_info?$limit=10&service_type_id=29&$skip=0",
  //     authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTA1MjU4ODcsImV4cCI6MTY1MzExNzg4NywiYXVkIjoiaHR0cHM6Ly91YXRjb2VhcGkuY29kZW5hdGlvbi5tZSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMjg2NzE0IiwianRpIjoiYTJlODk5M2YtYTA3OC00ZDM1LWJiNGUtYTZjZDk2NTA4MTZjIn0.3MkJKfj_XHdDMG8sAdxvhq-tGQFH0wLtH4nX_8fy-qs",
  //   }).then((result) => {
  //     const { body } = result;
  //     const { data } = body;
  //     const requestId = data[0].request_id;
  //     cy.visit(
  //       `/cmsEducation/ManageEducationalStandardsCertificateTabeeInfo/${requestId}`
  //     );
  //   });
  //   cy.wait(2500);

  //   cy.get('div[class="tab-menu-slide"]').contains("แบบประเมินสถาบัน").click();
  //   cy.get('label[class="custom-control-label"]').eq(1).click();
  //   cy.get('button[class="mb-3 submit-btn"]').click();
  //   cy.get('button[class="btn cms-tabee-red-white"]').click();
  //   cy.get('button[class="submit-btn-green"]').click();
  //   cy.get('button[class="btn cms-tabee-red-white"]').click();
  //   cy.wait(2500);

  //   cy.visit("/degree_certification/Vertify");
  //   cy.contains("ชื่อมหาวิทยาลัย").type("มหาวิทยาลัยปทุมธานี");
  //   cy.get('div[class="menu visible"]').click();
  //   cy.get('input[type="text"]').eq(1).type("0632122444");
  //   cy.get('div[class="button-items-right clickable"]').click();
  //   cy.get('tr[class="line-table"]')
  //     .eq(0)
  //     .find('td[class="text-mg"]')
  //     .eq(5)
  //     .find("div")
  //     .contains("ปฏิเสธคำขอ")
  //     .should("be.visible");
  // });

  it("บันทึกผลการพิจารณา ผ่าน", () => {
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

    cy.get('div[class="tab-menu-slide"]').contains("แบบประเมินสถาบัน").click();
    cy.get('button[class="upload-btn"]').eq(0).click();
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(0).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(1).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(2).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);

    cy.get('button[class="upload-btn"]').eq(1).click();
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(0).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(1).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(2).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);

    cy.get('button[class="upload-btn"]').eq(2).click();
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(0).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(1).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(2).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(5000);

    cy.get('label[class="custom-control-label"]').eq(0).click();
    cy.get('input[placeholder="Date Start"]').type("2022-04-21");
    cy.get('input[type="text"]').eq(0).clear().type("5");
    cy.get('input[type="text"]').eq(1).clear().type("กท.ว.5");
    cy.get('input[type="date"]').eq(1).type("2022-04-21");
    cy.get('input[type="date"]').eq(2).type("2022-04-21");
    cy.get("select").eq(0).select("2553");
    cy.get("select").eq(1).select("2562");
    cy.get("select").eq(2).select("2582");
    cy.get("select").eq(3).select("2");
    cy.get('button[class="mb-3 submit-btn"]').click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.get('button[class="submit-btn-green"]').click();
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(2500);

    cy.visit("/degree_certification/Vertify");
    cy.contains("ชื่อมหาวิทยาลัย").type("มหาวิทยาลัยปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[type="text"]').eq(1).type("0632122444");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.get('tr[class="line-table"]')
      .eq(0)
      .find('td[class="text-mg"]')
      .eq(5)
      .find("div")
      .contains("อนุมัติ")
      .should("be.visible");
  });
});
