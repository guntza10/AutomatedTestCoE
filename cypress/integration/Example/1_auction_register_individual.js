/// <reference types="cypress" />

describe("Test Register Auction Individual", () => {
  const serverId = Cypress.env("serverId");
  const serverDomain = Cypress.env("serverDomain");
  const emailAddress = `guntza@${serverDomain}`;
  let passwordResetLink = "";

  it("Success Case", () => {
    cy.visit("/signup");

    // check validate
    cy.get('button[id="sign_up"]').click();

    // input field
    cy.get('input[id="firstname"]').type("{enter}jomphop");

    cy.get('input[id="lastname"]').type("{enter}saibuatong");

    cy.get('input[id="email_sign_up"]').type(emailAddress);

    cy.get('input[id="phone"]').type("0845167512");

    cy.get('input[id="password_sign_up"]').type("@Test123456");

    cy.get('input[id="confirm_password_sign_up"]').type("@Test123456");

    cy.get('span[class="checkmark"]').eq(0).click();

    cy.get('span[class="checkmark"]').eq(1).click();

    cy.get('button[id="sign_up"]').click();
    cy.wait(2500);

    cy.mailosaurGetMessage(
      serverId,
      {
        sentTo: emailAddress,
      },
      {
        receivedAfter: new Date(),
      }
    ).then((email) => {
      cy.log("email", email);
      passwordResetLink = email.html.links[0].href;
    });

    // after register success
    cy.url().should("include", "/signupsuccess");
    cy.wait(2500);
  });

  it("Follows the link from the email", () => {
    cy.visit(passwordResetLink);
    cy.wait(2500);

    cy.url().should("include", "/upgrade?verify_token=");
    cy.wait(2500);

    cy.get('button[id="upgrade_btn"]').click();
    cy.get('button[id="confirm_selection"]').click();
    cy.wait(2500);
  });

  it("upgrade regular buyer,seller", () => {
    // member selection
    cy.url().should("include", "/membership/selection");
    cy.wait(2500);

    cy.get('label[id="individual"]').click();

    cy.get('label[id="seller"]').click();

    cy.get('span[class="checkmark"]').eq(0).click();

    cy.get('span[class="checkmark"]').eq(1).click();

    cy.get('button[id="next_btn"]').click();

    //member individual form
    cy.url().should("include", "/membership/individual_form");
    cy.wait(2500);

    // check validate
    cy.get('button[id="submit_regular"]').click();

    // input
    cy.get('select[id="title_id"]').select("1");
    // cy.get('select[name="title_id"]').focus().type("Mr.", { force: true });

    cy.get('input[id="first_name"]').type("{selectall}{backspace}Jomphop");

    cy.get('input[id="last_name"]').type("{selectall}{backspace}Saibuatong");

    cy.get('select[id="nationality_id"]').select("219");

    cy.get('input[id="id_card"]').type("1250351187606");

    cy.get('input[id="birthday"]').type("1995-09-22");

    cy.get('input[id="address"]').type(
      "5 Soi Taweecherdchoo, Ratchadapisek, Bangkok"
    );

    cy.get('select[id="province"]').select("28");

    cy.get('select[id="district"]').select("393");

    cy.get('select[id="sub_district"]').select("400101");

    cy.get('input[id="delivery_name"]').type("My Home");

    cy.get('input[id="bank_account_no"]').type("123456789");

    cy.get('select[id="bank_id"]').select("3");

    cy.get('input[id="bank_account_name"]').type("จอมภพ สายบัวทอง");

    cy.get('button[id="submit_regular"]').click();

    // member document
    cy.url().should("include", "/membership/document");
    cy.wait(2500);

    cy.fixture(`images/demo.jpg`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[id="file_id_card"]').attachFile({
          fileContent,
          filePath: "images/demo.jpg",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(1000);

    cy.fixture(`images/demo2.PNG`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[id="file_book_bank"]').attachFile({
          fileContent,
          filePath: "images/demo2.PNG",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(1000);

    cy.get('button[id="next_btn"]').click();

    // consent
    cy.url().should("include", "/membership/condition");
    cy.wait(2500);

    cy.get('label[class="container"]').click();

    cy.get('button[id="next_btn"]').click();

    // payment
    cy.url().should("include", "/membership/payment");
    cy.wait(2500);

    cy.get('button[id="next_btn"]').click();

    // payment confirm
    cy.url().should("include", "/membership/paymentconfirm");
    cy.wait(2500);

    cy.fixture(`images/demo.jpg`, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        cy.log("fileContent", fileContent);
        cy.get('input[id="exampleFile"]').attachFile({
          fileContent,
          filePath: "images/demo.jpg",
          encoding: "utf-8",
          lastModified: new Date().getTime(),
        });
      });
    cy.wait(1000);

    cy.get('input[id="payment_date"]').type("2021-07-19T17:30");

    cy.get('select[name="bank"]').focus().type("ธนาคารกสิกรไทย", { force: true });

    cy.get('button[id="next_btn_for_payment"]').click();
    cy.wait(2500);

    // register success
    cy.url().should("include", "/registersuccess");
  });
});
