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
    cy.wait(1000);
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
    cy.wait(1000);
    cy.get("a").contains("+เพิ่มรายวิชา").click();
    cy.wait(1000);
    cy.get("a").contains("+เพิ่มรายวิชา").click();
    cy.wait(1000);
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
  });
});
