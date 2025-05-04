import LastSessionCalculationExpressionStore from "../../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorScreen from "../../../../screens/calculator_screen.vue";
import {
  ADDITION_BUTTON_TEST_ID,
  BACKSPACE_BUTTON_TEST_ID,
  CLEAN_BUTTON_TEST_ID,
  EVALUATION_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
  SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
  TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR,
} from "../../../../constants/user_interface_constants";
import { createPinia, setActivePinia } from "pinia";
import { createApp } from "vue";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";

describe('Test Store "Calculator" Behavior', () => {
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

  it("Test If Store State Is Rendered On User Interface", () => {
    cy.get("h2").should("have.text", "");
  });

  it('Test If Method "loadLastSessionCalculationExpression" Loads The Last Session Calculation Expression From Key Value Store And Updates The User Interface Calculator Value', () => {
    LastSessionCalculationExpressionStore.setExpression(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    const pinia = createPinia();
    setActivePinia(pinia);
    const app = createApp(pinia);
    app.use(pinia);
    cy.mount(CalculatorScreen);

    cy.get("h2").should("have.text", SIMPLE_CALCULATOR_CALCULATION_EXPRESSION);
  });

  it('Test If Method "addCharacter" Adds Character To Calculator Value And Stores Expression To Key Value Store', () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should("have.text", CalculatorCharacters.ONE);
  });

  it('Test If Method "backspace" Removes Last Character From Calculator Value And Stores Expression To Key Value Store', () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(BACKSPACE_BUTTON_TEST_ID)).click(
      {
        force: true,
      },
    );

    cy.get("h2").should("have.text", "");
  });

  it('Test If Method "clean" Cleans Calculator Value And Stores Expression To Key Value Store', () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(CLEAN_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should("have.text", "");
  });

  it('Test If Method "evaluate" Evaluates Calculator Value And Stores Expression To Key Value Store', () => {
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
  });
});
