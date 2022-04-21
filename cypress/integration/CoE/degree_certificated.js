/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Test Degree Certificated", () => {
  it("Submit a degree certificate", () => {
    cy.visit("/");
    cy.get('button[class="btn tabee-red-white"]').click();

    cy.get('input[type="checkbox"]').click();
    cy.get('div[class="button-items-consent clickable"]').click();

    cy.get('a[href="/degree_certification/Vertify"]').click();
    cy.contains("ชื่อมหาวิทยาลัย").type("มหาวิทยาลัยปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[type="text"]').eq(1).type("0632122444");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('button[class="button-items-right-associate"]').click();
    cy.get(
      'div[class="button-items-right button-modal-success clickable"]'
    ).click();

    cy.get('input[placeholder="เลขที่"]').type("1/23");
    cy.get('div[class="text default"]').contains("จังหวัด").type("ปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]').contains("อำเภอ").type("คลองหลวง");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]').contains("ตำบล").type("คลองหนึ่ง");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[placeholder="รหัสไปรษณีย์"]').type("12120");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('div[class="text default"]').contains("สาขาวิชา").type("โยธา");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]')
      .contains("คุณวุฒิ")
      .type("วิศวกรรมศาสตรบัณฑิต");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[placeholder="ชื่อหลักสูตร ภาษาไทย (TH)"]').type(
      "โยธาพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อหลักสูตร ภาษาอังกฤษ (EN)"]').type(
      "Special Civil test"
    );
    cy.get("select").select("2565");
    cy.get('input[placeholder="ชื่อเต็ม ภาษาไทย (TH)"]').type(
      "ปริญญาโยธาพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อย่อ ภาษาไทย (TH)"]').type(
      "ปรญ. โยธาพิเศษ ทดสอบ"
    );
    cy.get('input[placeholder="ชื่อเต็ม ภาษาอังกฤษ (EN)"]').type(
      "Bachelor Special Civil test"
    );
    cy.get('input[placeholder="ชื่อย่อ ภาษาอังกฤษ (EN)"]').type(
      "B. S. Civil test"
    );
    cy.get('input[placeholder="วิชาเอก/แขนงวิชา ภาษาไทย (TH) อื่นๆ"]').type(
      "โยธา เทส"
    );
    cy.get('input[placeholder="วิชาเอก/แขนงวิชา ภาษาอังกฤษ (EN) อื่นๆ"]').type(
      "Civil test"
    );
    cy.get('textarea[placeholder="รายละเอียดของปรัญญา"]').type("เทสสสสสสสสสสส");
    cy.get('textarea[placeholder="รายละเอียดของวัตถุประสงค์ของหลักสูตร"]').type(
      "เทสสสสสสสสสสส"
    );
    cy.get('textarea[placeholder="อธิบายระบบการศึกษา"]').type("เทสสสสสสสสสสส");
    cy.get('textarea[placeholder="อธิบายการจัดการศึกษาภาคฤดูร้อน"]').type(
      "เทสสสสสสสสสสส"
    );
    cy.get(
      'textarea[placeholder="อธิบายการเทียบเคียงหน่วยกิตในระบบทวิภาค"]'
    ).type("เทสสสสสสสสสสส");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('div[class="text default"]')
      .contains("คำนำหน้าชื่อ (TH)")
      .type("นาย");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[placeholder="ชื่อ (TH)"]').type("เรืองฤทธิ์");
    cy.get('input[placeholder="นามสกุล (TH)"]').type("สุขใจ");
    cy.get('input[placeholder="ชื่อ (EN)"]').type("Ruengrit");
    cy.get('input[placeholder="นามสกุล (EN)"]').type("sookjai");
    cy.get('input[placeholder="วันเกิด"]').type("2022-04-28");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').type("0891112222");
    cy.get('input[placeholder="อีเมล์"]').type("rr.s@gmail.com");
    cy.get('input[placeholder="ตำแหน่ง"]').type("ผู้อำนวยการคณะ");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('input[placeholder="เลขที่"]').eq(0).type("1/23");
    cy.get('div[class="text default"]')
      .contains("จังหวัด")
      .eq(0)
      .type("ปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]')
      .contains("อำเภอ")
      .eq(0)
      .type("คลองหลวง");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]')
      .contains("ตำบล")
      .eq(0)
      .type("คลองหนึ่ง");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[placeholder="รหัสไปรษณีย์"]').eq(0).type("12120");
    cy.get('input[placeholder="เลขที่"]').eq(1).type("1/23");
    cy.get('div[class="text default"]')
      .contains("จังหวัด")
      .eq(0)
      .type("ปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]')
      .contains("อำเภอ")
      .eq(0)
      .type("คลองหลวง");
    cy.get('div[class="menu visible"]').click();
    cy.get('div[class="text default"]')
      .contains("ตำบล")
      .eq(0)
      .type("คลองหนึ่ง");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[placeholder="รหัสไปรษณีย์"]').eq(1).type("12120");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get("a").contains("+เพิ่มรายชื่อ").click();
    cy.wait(5000);
    cy.get("a").contains("+เพิ่มรายชื่อ").click();
    cy.get("select").eq(0).select("2");
    cy.get('input[placeholder="ชื่อ"]').eq(0).type("ลำดวล");
    cy.get('input[placeholder="นามสกุล"]').eq(0).type("กลิ่นหอม");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').eq(0).type("0891113333");
    cy.get('input[placeholder="อีเมล์"]').eq(0).type("lumduan@gmail.com");
    cy.get("select").eq(1).select("1");
    cy.get("select").eq(2).select("2");
    cy.get('input[placeholder="ชื่อ"]').eq(1).type("ลำใย");
    cy.get('input[placeholder="นามสกุล"]').eq(1).type("อร่อย");
    cy.get('input[placeholder="หมายเลขโทรศัพท์"]').eq(1).type("0891114444");
    cy.get('input[placeholder="อีเมล์"]').eq(1).type("lumyai@gmail.com");
    cy.get("select").eq(3).select("2");
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get("a").contains("+เพิ่มรายวิชา").click();
    cy.wait(5000);
    cy.get("a").contains("+เพิ่มรายวิชา").click();
    cy.wait(5000);
    cy.get("a").contains("+เพิ่มรายวิชา").click();
    cy.get('textarea[placeholder="ระบุหมวดวิชา"]')
      .eq(0)
      .type("องค์ความรู้พื้นฐานทางวิทยาศาสตร์");
    cy.get('textarea[placeholder="ระบุองค์ความรู้"]')
      .eq(0)
      .type("1.1 คณิตศาสตร์เชิงวิศวกรรม");
    cy.get('textarea[placeholder="ระบุคำอธิบายเพิ่มเติม"]')
      .eq(0)
      .type("คำอธิบายเพิ่มครับเสริม");
    cy.get('textarea[placeholder="ระบุรหัสวิชา"]').eq(0).type("07-25-101");
    cy.get('textarea[placeholder="ระบุชื่อรายวิชา"]')
      .eq(0)
      .type("Calculus for Construction Engineers 1");
    cy.get('textarea[placeholder="ระบุภาระหน่วยกิต"]').eq(0).type("3(3-0-6) ");
    cy.get('textarea[placeholder="ระบุรายชื่อผู้สอน"]')
      .eq(0)
      .type("นายจีรศักดิ์ ดีสะเมาะ");
    cy.get('textarea[placeholder="ระบุคุณวุฒิของผู้สอน"]')
      .eq(0)
      .type("วท.บ.คณิตศาสตร์ (มศว.)");
    cy.get('textarea[placeholder="ระบุหมวดวิชา"]')
      .eq(1)
      .type("องค์ความรู้เฉพาะทางวิทยาศาสตร์");
    cy.get('textarea[placeholder="ระบุองค์ความรู้"]')
      .eq(1)
      .type("3.1 กลุ่มที่1 วิศวกรรมโครงสร้าง (Structure Engineer)");
    cy.get('textarea[placeholder="ระบุคำอธิบายเพิ่มเติม"]')
      .eq(1)
      .type(
        "สามารถวิเคราะหโครงสร้างออกแบบโครงสร้างภายใต้แรงกระทำใบรุปแบบต่างๆ"
      );
    cy.get('textarea[placeholder="ระบุรหัสวิชา"]').eq(1).type("07-25-301");
    cy.get('textarea[placeholder="ระบุชื่อรายวิชา"]')
      .eq(1)
      .type("Strength of Materials");
    cy.get('textarea[placeholder="ระบุภาระหน่วยกิต"]').eq(1).type("3(3-0-6)");
    cy.get('textarea[placeholder="ระบุรายชื่อผู้สอน"]')
      .eq(1)
      .type("นางสาววิมรรศนา ณ สงขลา วศ.บ. โยธา (มธ.)");
    cy.get('textarea[placeholder="ระบุคุณวุฒิของผู้สอน"]')
      .eq(1)
      .type("วศ.ม. โยธา");
    cy.get('textarea[placeholder="ระบุหมวดวิชา"]')
      .eq(2)
      .type("องค์ความรู้เฉพาะทางวิทยาศาสตร์");
    cy.get('textarea[placeholder="ระบุองค์ความรู้"]')
      .eq(2)
      .type("3.1 กลุ่มที่1 วิศวกรรมโครงสร้าง (Structure Engineer)");
    cy.get('textarea[placeholder="ระบุคำอธิบายเพิ่มเติม"]')
      .eq(2)
      .type(
        "สามารถวิเคราะห์โครงสร้างออกแบบโครงสร้างภายใต้แรงกระทำใบรุปแบบต่างๆ"
      );
    cy.get('textarea[placeholder="ระบุรหัสวิชา"]').eq(2).type("07-25-301");
    cy.get('textarea[placeholder="ระบุชื่อรายวิชา"]')
      .eq(2)
      .type("Strength of Materials");
    cy.get('textarea[placeholder="ระบุภาระหน่วยกิต"]').eq(2).type("3(3-0-6)");
    cy.get('textarea[placeholder="ระบุรายชื่อผู้สอน"]')
      .eq(2)
      .type("นางสาววิมรรศนา ณ สงขลา");
    cy.get('textarea[placeholder="ระบุคุณวุฒิของผู้สอน"]')
      .eq(2)
      .type(
        "วศ.บ. โยธา (สถาบันเทคโนโลยีราชมงคล),วศ.บ. โยธา (ม.มหานคร),วศ.ด. โยธา (มทส.)"
      );
    cy.get('div[class="button-items-right clickable"]').click();

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
    cy.wait(1000);
    cy.fixture(`files/test_upload.pdf`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[type="file"]').eq(3).attachFile({
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
        cy.get('input[type="file"]').eq(4).attachFile({
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
        cy.get('input[type="file"]').eq(5).attachFile({
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
        cy.get('input[type="file"]').eq(6).attachFile({
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
        cy.get('input[type="file"]').eq(7).attachFile({
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
        cy.get('input[type="file"]').eq(8).attachFile({
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
        cy.get('input[type="file"]').eq(9).attachFile({
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
        cy.get('input[type="file"]').eq(10).attachFile({
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
        cy.get('input[type="file"]').eq(11).attachFile({
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
        cy.get('input[type="file"]').eq(12).attachFile({
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
        cy.get('input[type="file"]').eq(13).attachFile({
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
        cy.get('input[type="file"]').eq(14).attachFile({
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
        cy.get('input[type="file"]').eq(15).attachFile({
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
        cy.get('input[type="file"]').eq(16).attachFile({
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
        cy.get('input[type="file"]').eq(17).attachFile({
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
        cy.get('input[type="file"]').eq(18).attachFile({
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
        cy.get('input[type="file"]').eq(19).attachFile({
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
        cy.get('input[type="file"]').eq(20).attachFile({
          fileContent,
          filePath: "files/test_upload.pdf",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(2500);
    cy.get('input[id="checkbox-agreement"]').click({ force: true });
    cy.get('div[class="button-items-right clickable"]').click();

    cy.get('div[class="button-items-right clickable"]')
      .contains("ยืนยันการอัปโหลดเอกสาร ")
      .click();
    cy.wait(10000);
  });

  it("Check documents", () => {
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
    cy.get('input[placeholder="ชื่อ-นามสกุล"]').type("เดฟ จีโอ");
    cy.get("button").contains("บันทึกผล").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();
    cy.wait(1000);
    cy.get("button").contains("แจ้งสมาชิก").click();
    cy.wait(2500);
    cy.get('button[class="btn cms-tabee-red-white"]').click();
  });

  it("payment ", () => {
    cy.visit("/degree_certification/Vertify");
    cy.contains("ชื่อมหาวิทยาลัย").type("มหาวิทยาลัยปทุมธานี");
    cy.get('div[class="menu visible"]').click();
    cy.get('input[type="text"]').eq(1).type("0632122444");
    cy.get('div[class="button-items-right clickable"]').click();
  });
});
