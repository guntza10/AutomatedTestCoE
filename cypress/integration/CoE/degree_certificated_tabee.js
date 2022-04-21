/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("Submit a degree certificate pass", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get('button[class="btn tabee-red-white"]').click();
    cy.get('label[class="lbl-control-input"]').click();
    cy.get('div[class="button-items-consent clickable"]').click();
    cy.wait(1000);
    cy.get('a[href="/tabee/Vertify"]').click();
    cy.get('div[class="ui fluid search selection dropdown"]')
      .click()
      .type("มหาวิทยาลัยปทุม")
      .then((div) => {
        cy.wrap(div).get('div[class="item"').click();
      });
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(0)
      .then((div) => {
        cy.wrap(div).get("input").eq(1).type("มหาวิทยาลัยปทุม");
      });
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(1)
      .then((div) => {
        cy.wrap(div).get("input").eq(2).type("0632122444");
      });
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('button[class="button-items-right-associate"]').click();
    cy.wait(1000);
    cy.get(
      'div[class="button-items-right button-modal-success clickable"]'
    ).click();
    cy.wait(1000);
    cy.get('input[placeholder="เลขที่"]').type("1/24");
    cy.get('input[class="search"]')
      .eq(0)
      .type("ปทุมธานี")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').click();
      });
    cy.get('input[class="search"]')
      .eq(1)
      .type("คลองหลวง")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("คลองหลวง").click();
      });
    cy.get('input[class="search"]')
      .eq(2)
      .type("คลองหนึ่ง")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("คลองหนึ่ง").click();
      });
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('input[class="search"]')
      .eq(0)
      .type("เครื่องกล")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("เครื่องกล").click();
      });
    cy.get('input[class="search"]')
      .eq(1)
      .type("วิศวกรรมศาสตรบัณฑิต")
      .then((div) => {
        cy.wrap(div)
          .get('div[class="item"]')
          .contains("วิศวกรรมศาสตรบัณฑิต")
          .click();
      });
    cy.get('input[placeholder="ชื่อหลักสูตร ภาษาไทย (TH)"]').type(
      "เครื่องกลพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อหลักสูตร ภาษาอังกฤษ (EN)"]').type(
      "Special Mechanic test"
    );
    cy.get('select[class="custom-select"]').select("2565");
    cy.get('input[placeholder="ชื่อเต็ม ภาษาไทย (TH)"]').type(
      "ปริญญาเครื่องกลพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อย่อ ภาษาไทย (TH)"]').type(
      "ปรญ. เครื่องกลพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อเต็ม ภาษาอังกฤษ (EN)"]').type(
      "Bachelor Special Mechanic test"
    );
    cy.get('input[placeholder="ชื่อย่อ ภาษาอังกฤษ (EN)"]').type(
      "B. S. Mechanic test"
    );
    cy.get('input[placeholder="วิชาเอก/แขนงวิชา ภาษาไทย (TH) อื่นๆ"]').type(
      "เครื่องกล เทส"
    );
    cy.get('input[placeholder="วิชาเอก/แขนงวิชา ภาษาอังกฤษ (EN) อื่นๆ"]').type(
      "Mechanic test"
    );
    // cy.get('textarea[placeholder="รายละเอียดของปรัญญา"]').type("เทสสสสสสสสสสส");
    cy.get('textarea[placeholder="รายละเอียดของวัตถุประสงค์ของหลักสูตร"]').type(
      "เทสสสสสสสสสสส"
    );
    // cy.get('textarea[placeholder="อธิบายระบบการศึกษา"]').type("เทสสสสสสสสสสส");
    // cy.get('textarea[placeholder="อธิบายการจัดการศึกษาภาคฤดูร้อน"]').type(
    //   "เทสสสสสสสสสสส"
    // );
    // cy.get(
    //   'textarea[placeholder="อธิบายการเทียบเคียงหน่วยกิตในระบบทวิภาค"]'
    // ).type("เทสสสสสสสสสสส");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('input[class="search"]')
      .eq(0)
      .type("นาย")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("นาย").click();
      });
    cy.get('input[placeholder="ชื่อ (TH)"]').type("เรืองฤทธิ์");
    cy.get('input[placeholder="นามสกุล (TH)"]').type("สุขใจ");
    cy.get('input[placeholder="ชื่อ (EN)"]').type("Ruengrit");
    cy.get('input[placeholder="นามสกุล (EN)"]').type("sookjai");
    cy.get('input[type="date"]').click("right").type("2022-04-28");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').type("0891112222");
    cy.get('input[placeholder="อีเมล์"]').type("rr.s@gmail.com");
    cy.get('input[placeholder="ตำแหน่ง"]').type("ผู้อำนวยการคณะ");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('input[placeholder="เลขที่"]').eq(0).type("1/24");
    cy.get('input[class="search"]')
      .eq(0)
      .type("ปทุมธานี")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("ปทุมธานี").click();
      });
    cy.get('input[class="search"]')
      .eq(1)
      .type("คลองหลวง")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("คลองหลวง").click();
      });
    cy.get('input[class="search"]')
      .eq(2)
      .type("คลองหนึ่ง")
      .then((div) => {
        cy.wrap(div).get('div[class="item"]').contains("คลองหนึ่ง").click();
      });
    cy.get('input[placeholder="เลขที่"]').eq(1).type("1/24");
    cy.get('input[class="search"]')
      .eq(3)
      .type("ปทุมธานี")
      .then((div) => {
        cy.wrap(div).get('div[class="menu visible"]').click();
      });
    cy.get('input[class="search"]')
      .eq(4)
      .type("คลองหลวง")
      .then((div) => {
        cy.wrap(div).get('div[class="menu visible"]').click();
      });
    cy.get('input[class="search"]')
      .eq(5)
      .type("คลองหนึ่ง")
      .then((div) => {
        cy.wrap(div).get('div[class="menu visible"]').click();
      });
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get("a").contains("+เพิ่มรายชื่อ").click();
    cy.get("a").contains("+เพิ่มรายชื่อ").click();
    cy.get("select").eq(0).select("นาย");
    cy.get('input[placeholder="ชื่อ"]').eq(0).type("ลำดวล");
    cy.get('input[placeholder="นามสกุล"]').eq(0).type("กลิ่นหอม");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').eq(0).type("0891113333 ");
    cy.get('input[placeholder="อีเมล์"]').eq(0).type("lumduan@gmail.com");
    cy.get("select").eq(1).select("ผู้รับผิดชอบหลักสูตรโดยตรง");

    cy.get("select").eq(2).select("นาง");
    cy.get('input[placeholder="ชื่อ"]').eq(1).type("ลำใย");
    cy.get('input[placeholder="นามสกุล"]').eq(1).type("อร่อย");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').eq(1).type("0891114444");
    cy.get('input[placeholder="อีเมล์"]').eq(1).type("lumyai@gmail.com");
    cy.get("select").eq(3).select("ผู้ประสานงานหลักสูตร");
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
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
    cy.wait(1000);
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
    cy.wait(1000);
    cy.get('div[class="button-items-right clickable"]').click();
    cy.get('div[class="button-items-right clickable"]')
      .contains("ยืนยันการอัปโหลดเอกสาร ")
      .click();
    cy.wait(5000);
  });

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

  it("payment ", () => {
    cy.visit("/tabee/Vertify");
    cy.get('div[class="ui fluid search selection dropdown"]')
      .click()
      .type("มหาวิทยาลัยปทุม")
      .then((div) => {
        cy.wrap(div).get('div[class="item"').click();
      });
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(0)
      .then((div) => {
        cy.wrap(div).get("input").eq(1).type("มหาวิทยาลัยปทุม");
      });
    cy.get('div[class="cms-tabee-textbox-ourline"]')
      .eq(1)
      .then((div) => {
        cy.wrap(div).get("input").eq(2).type("0632122444");
      });
    cy.get('div[class="button-items-right clickable"]').click();
    cy.wait(1000);
    cy.get('div[class="btn coe-red-white"]').eq(0).click();
    cy.wait(3000);
    cy.get('div[class="button-items-right clickable"]').click();
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
        cy.wrap(td).get("div").contains("ชำระเงินค่าคำขอรับรองแล้ว");
      });
  });
});
