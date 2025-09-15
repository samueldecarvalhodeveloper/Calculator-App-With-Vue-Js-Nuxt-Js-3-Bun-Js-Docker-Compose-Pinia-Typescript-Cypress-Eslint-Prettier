import CalculationExpression from "./calculation_expression";
import type CalculationExpressionActiveRecord from "./calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "./calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "./calculation_expression_register";
import Calculator from "./calculator";

class CalculatorFactory {
  private static instance: Calculator | null = null;

  private constructor() {}

  public static getInstance(initialCalculationExpression: string): Calculator {
    if (this.instance === null) {
      const calculationExpression: CalculationExpression =
        new CalculationExpression(initialCalculationExpression);
      const calculationExpressionRegister: CalculationExpressionRegister =
        new CalculationExpressionRegister(calculationExpression);
      const calculatorActiveRecord: CalculationExpressionActiveRecord =
        new CalculationExpressionActiveRecordDecorator(
          calculationExpressionRegister,
        );

      this.instance = new Calculator(calculatorActiveRecord);
    }

    return this.instance;
  }
}

export default CalculatorFactory;
