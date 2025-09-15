import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../constants/user_interface_constants";
import Calculator from "../../../../components/calculator.vue";

describe("Test Component Calculator Behavior", () => {
  it("Test If Component Is Rendered", () => {
    cy.mount(Calculator, {
      props: { value: SIMPLE_CALCULATOR_CALCULATION_EXPRESSION },
    });

    cy.get("h2").should("have.text", SIMPLE_CALCULATOR_CALCULATION_EXPRESSION);
  });
});
