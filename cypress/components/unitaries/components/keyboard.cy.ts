import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import Keyboard from "../../../../components/keyboard.vue";
import { PARAGRAPH_HTML_ELEMENT } from "../../../../constants/user_interface_constants";

describe("Test Component Keyboard Behavior", () => {
  it("Test If Component Is Rendered", () => {
    cy.mount(Keyboard, {
      slots: { default: PARAGRAPH_HTML_ELEMENT(CalculatorCharacters.ONE) },
    });

    cy.get("p").should("have.text", CalculatorCharacters.ONE);
  });
});
