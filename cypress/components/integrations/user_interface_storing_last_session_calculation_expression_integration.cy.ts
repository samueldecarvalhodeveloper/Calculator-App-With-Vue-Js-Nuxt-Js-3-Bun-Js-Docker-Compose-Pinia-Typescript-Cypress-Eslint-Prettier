import LastSessionCalculationExpressionStore from "../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import {
  ADDITION_BUTTON_TEST_ID,
  EVALUATION_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
  TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR,
} from "../../../constants/user_interface_constants";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import CalculatorScreen from "../../../screens/calculator_screen.vue";
import { createPinia, setActivePinia } from "pinia";
import { createApp } from "vue";

describe('Test Integration Of "Ui Getting Stored Values" Behavior', () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    const app = createApp(pinia);
    app.use(pinia);
    cy.mount(CalculatorScreen);
  });

  it("Test If I Can Execute A Calculation On User Interface", () => {
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
