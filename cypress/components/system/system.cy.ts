import LastSessionCalculationExpressionStore from "../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorScreen from "../../../screens/calculator_screen.vue";
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
import { createApp } from "vue";

describe("Test System Behavior", () => {
  beforeEach(() => {
    LastSessionCalculationExpressionStore.setExpression("");

    const pinia = createPinia();
    setActivePinia(pinia);
    const app = createApp(pinia);
    app.use(pinia);
    cy.mount(CalculatorScreen);

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(CLEAN_BUTTON_TEST_ID)).click({
      force: true,
    });
  });

  it("Test If System Handles A Calculator Calculation In User Interface", () => {
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

  it("Test If System Handles A User Interface Calculator Value Storing Its Calculation Expression To The Next Session", () => {
    cy.stub(LastSessionCalculationExpressionStore, "getExpression").returns(
      CalculatorCharacters.TWO,
    );

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

    const storedCalculationExpression =
      LastSessionCalculationExpressionStore.getExpression();

    expect(storedCalculationExpression).equals(CalculatorCharacters.TWO);
  });
});
