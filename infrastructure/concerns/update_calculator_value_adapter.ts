import type Calculator from "../../domains/calculator/calculator";
import LastSessionCalculationExpressionStore from "../anticorruption_layer/last_session_calculation_expression_store";

class UpdateCalculatorValueAdapter {
  private constructor() {}

  public static updateCalculatorValue(
    state: { value: string },
    calculator: Calculator,
  ) {
    const currentCalculationExpression = calculator.getExpression();

    LastSessionCalculationExpressionStore.setExpression(
      currentCalculationExpression,
    );

    state.value = currentCalculationExpression;
  }
}

export default UpdateCalculatorValueAdapter;
