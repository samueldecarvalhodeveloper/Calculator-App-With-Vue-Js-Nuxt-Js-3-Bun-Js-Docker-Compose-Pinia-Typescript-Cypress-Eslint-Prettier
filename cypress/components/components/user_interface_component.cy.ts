import LastSessionCalculationExpressionStore from "../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorScreen from "../../../screens/calculator_screen.vue";
import {
  ADDITION_BUTTON_TEST_ID,
  BACKSPACE_BUTTON_TEST_ID,
  CLEAN_BUTTON_TEST_ID,
  DIVISION_BUTTON_TEST_ID,
  EIGHT_BUTTON_TEST_ID,
  EVALUATION_BUTTON_TEST_ID,
  FIVE_BUTTON_TEST_ID,
  FOUR_BUTTON_TEST_ID,
  MULTIPLICATION_BUTTON_TEST_ID,
  NINE_BUTTON_TEST_ID,
  ONE_BUTTON_TEST_ID,
  POINT_BUTTON_TEST_ID,
  SEVEN_BUTTON_TEST_ID,
  SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
  SIX_BUTTON_TEST_ID,
  SUBTRACTION_BUTTON_TEST_ID,
  TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR,
  THREE_BUTTON_TEST_ID,
  TWO_BUTTON_TEST_ID,
  ZERO_BUTTON_TEST_ID,
} from "../../../constants/user_interface_constants";
import { createPinia, setActivePinia } from "pinia";
import { createApp } from "vue";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";

describe('Test Component "UserInterface" Behavior', () => {
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

  it("Test If Calculator Value Is Updated With Last Session Calculation Expression On Screen Mount", () => {
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

  it("Test Adding All Numerical Its Character To Calculator Value", () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ZERO_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(TWO_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(THREE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(FOUR_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(FIVE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(SIX_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(SEVEN_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(EIGHT_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(NINE_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should(
      "have.text",
      CalculatorCharacters.ZERO +
        CalculatorCharacters.ONE +
        CalculatorCharacters.TWO +
        CalculatorCharacters.THREE +
        CalculatorCharacters.FOUR +
        CalculatorCharacters.FIVE +
        CalculatorCharacters.SIX +
        CalculatorCharacters.SEVEN +
        CalculatorCharacters.EIGHT +
        CalculatorCharacters.NINE,
    );
  });

  it("Test Adding All Symbolic Its Character To Calculator Value", () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(POINT_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should("have.text", CalculatorCharacters.POINT);
  });

  it("Test Adding All Operators Its Character To Calculator Value", () => {
    cy.get(
      TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(MULTIPLICATION_BUTTON_TEST_ID),
    ).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ADDITION_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(
      TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(SUBTRACTION_BUTTON_TEST_ID),
    ).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(DIVISION_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should(
      "have.text",
      CalculatorCharacters.MULTIPLICATION +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.SUBTRACTION +
        CalculatorCharacters.DIVISION,
    );
  });

  it("Test Cleaning Calculator Value", () => {
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(ONE_BUTTON_TEST_ID)).click({
      force: true,
    });
    cy.get(TEST_ID_HTML_ATTRIBUTE_CSS_SELECTOR(CLEAN_BUTTON_TEST_ID)).click({
      force: true,
    });

    cy.get("h2").should("have.text", "");
  });

  it("Test Removing Last Character From Calculator Value", () => {
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

  it("Test Evaluating Calculator Value", () => {
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
