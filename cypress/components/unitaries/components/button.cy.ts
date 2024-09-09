import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import Button from "../../../../components/button.vue";

describe("Test Component Button Behavior", () => {
  it("Test If Component Is Rendered", () => {
    cy.mount(Button, {
      props: {
        character: CalculatorCharacters.ONE,
      },
    });

    cy.get(".button").should("have.text", CalculatorCharacters.ONE);
  });
});
