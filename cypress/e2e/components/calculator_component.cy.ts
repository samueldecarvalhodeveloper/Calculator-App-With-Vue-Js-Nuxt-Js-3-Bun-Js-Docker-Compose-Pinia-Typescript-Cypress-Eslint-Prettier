import CalculationExpression from "../../../domains/calculator/calculation_expression";
import type CalculationExpressionActiveRecord from "../../../domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../../domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../domains/calculator/calculation_expression_register";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";

describe('Test Component "Calculator" Behavior', () => {
  let calculator: Calculator;
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;

  before(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    const calculationExpressionRegister: CalculationExpressionRegister =
      new CalculationExpressionRegister(calculationExpression);
    calculationExpressionActiveRecord =
      new CalculationExpressionActiveRecordDecorator(
        calculationExpressionRegister,
      );

    calculator = new Calculator(calculationExpressionActiveRecord);
  });

  beforeEach(() => {
    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();
  });

  it("Test If Component Handles Data Input And Output Scenario", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.backspace();

    calculator.addCharacter(CalculatorCharacters.ONE);

    calculator.evaluate();

    const evaluatedCalculationExpression = calculator.getExpression();

    expect(evaluatedCalculationExpression).equals(CalculatorCharacters.TWO);

    calculator.clean();

    const cleanedCalculationExpression = calculator.getExpression();

    expect(cleanedCalculationExpression).equals("");
  });
});
