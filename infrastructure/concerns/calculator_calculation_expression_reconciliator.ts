import type Calculator from "../../domains/calculator/calculator";
import type CalculatorCharacters from "../../domains/calculator/calculator_characters";
import LastSessionCalculationExpressionStore from "../anticorruption_layer/last_session_calculation_expression_store";

class CalculatorCalculationExpressionReconciliator {
  private constructor() {}

  public static reconciliateCalculatorCalculationExpression(
    calculator: Calculator,
  ) {
    const lastSessionCalculationExpressionStore =
      LastSessionCalculationExpressionStore.getExpression();

    for (const character of lastSessionCalculationExpressionStore) {
      calculator.addCharacter(character as CalculatorCharacters);
    }
  }
}

export default CalculatorCalculationExpressionReconciliator;
