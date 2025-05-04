import LastSessionCalculationExpressionStore from "../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import {
  ADDITION_BUTTON_TEST_ID,
  BACKSPACE_BUTTON_TEST_ID,
  CLEAN_BUTTON_TEST_ID,
  EVALUATION_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
  TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR,
} from "../../../constants/user_interface_constants";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import { createPinia, setActivePinia } from "pinia";
import CalculatorScreen from "../../../screens/calculator_screen.vue";
import { createApp } from "vue";

describe('Test Integration Of "User interface Executing Calculation" Behavior', () => {
  beforeEach(() => {
    LastSessionCalculationExpressionStore.setExpression("");

    const pinia = createPinia();
    setActivePinia(pinia);
    const app = createApp(pinia);
    app.use(pinia);
    cy.mount(CalculatorScreen);
  });

  it("Test If I Can Execute A Calculation On User Interface", () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(BACKSPACE_BUTTON_TEST_ID)).click(
      {
        force: true,
      },
    );

    cy.get("h2").should("have.text", "");

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ADDITION_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(
      TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(EVALUATION_BUTTON_TEST_ID),
    ).click({
      force: true,
    });

    cy.get("h2").should("have.text", CalculatorCharacters.TWO);

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(CLEAN_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should("have.text", "");
  });
});
