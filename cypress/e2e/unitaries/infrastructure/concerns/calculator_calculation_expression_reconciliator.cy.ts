import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../../constants/user_interface_constants";
import CalculatorFactory from "../../../../../domains/calculator/calculator_factory";
import LastSessionCalculationExpressionStore from "../../../../../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorCalculationExpressionReconciliator from "../../../../../infrastructure/concerns/calculator_calculation_expression_reconciliator";

describe('Test Class "CalculatorCalculationExpressionReconciliator" Behavior', () => {
  it('Test If Method "reconciliateCalculatorCalculationExpression" Synchronizes Calculation Expression From Last Session With Calculator Calculation Expression', () => {
    const calculator = CalculatorFactory.getInstance("");

    LastSessionCalculationExpressionStore.setExpression(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    CalculatorCalculationExpressionReconciliator.reconciliateCalculatorCalculationExpression(
      calculator,
    );

    const reconciliatedCalculatorCalculationExpression =
      calculator.getExpression();

    expect(reconciliatedCalculatorCalculationExpression).equals(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );
  });
});
