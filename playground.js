import { expect } from "@playwright/test";

export class Playground {
  constructor(page) {
    this.page = page;
    this.url = "https://mad-qa.pl/playground/";

    this.clickableButton = this.page.getByTestId("btn-click-me");
    this.buttonStatusLabel = this.page.getByTestId("btn-state");
    this.textInputField = this.page.getByRole("textbox", {
      name: "Wpisz wiadomość",
    });
    this.sendTextInputButton = this.page.locator("#msg-send");
    this.textMessageOutput = this.page.locator("#msg-output");
    this.sectionButton = this.page.locator("#sec-button");
    this.emailInputField = this.page.getByTestId("email-input");
    this.emailSubmitButton = this.page.getByTestId("email-submit");
    this.emailValidationMessage = this.page.getByTestId("email-validation");

    this.correctEmailMessage = "Poprawny email";
    this.incorrectEmailMessage = "Niepoprawny email";
  }

  async navigateTo() {
    await this.page.goto(this.url);
  }

  async clickClickableButton() {
    const initialState = await this.buttonStatusLabel.textContent();
    await this.clickableButton.click();
    const changedStatus = await this.buttonStatusLabel.textContent();

    expect(changedStatus).not.toBe(initialState);
  }

  async fillTextInputField(textValue) {
    await this.textInputField.click();
    await this.textInputField.fill(textValue);
  }

  async sendFilledText() {
    await this.sendTextInputButton.click();
  }

  async checkOutputMessage(expectedValue) {
    await expect(this.textMessageOutput).toHaveText(
      `Wprowadzono: ${expectedValue}`
    );
  }

  async fillEmailField(email) {
    await this.emailInputField.click();
    await this.emailInputField.fill(email);
  }

  async submitEmail() {
    await this.emailSubmitButton.click();
  }

  async verifyEmailValidation(isValid = true) {
    const expectedMessage = isValid
      ? this.correctEmailMessage
      : this.incorrectEmailMessage;
    await expect(this.emailValidationMessage).toHaveText(expectedMessage);
  }

  async checkAllCheckboxes() {
    const checkboxIds = ["chk-1", "chk-2", "chk-3"];

    for (let i = 0; i < checkboxIds.length; i++) {
      await this.page.getByTestId(checkboxIds[i]).check();
      await expect(this.page.getByTestId("checkbox-count")).toContainText(
        `Zaznaczone: ${i + 1}/3`
      );
    }

    for (let i = 0; i < checkboxIds.length; i++) {
      await this.page.getByTestId(checkboxIds[i]).uncheck();
      await expect(this.page.getByTestId("checkbox-count")).toContainText(
        `Zaznaczone: ${3 - (i + 1)}/3`
      );
    }
  }
}
