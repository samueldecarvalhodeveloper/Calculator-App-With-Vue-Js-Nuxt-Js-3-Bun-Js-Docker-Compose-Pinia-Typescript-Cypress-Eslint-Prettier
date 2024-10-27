import CalculationExpression from "../../../domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../domains/calculator/calculation_expression_active_record";
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

  it("Test Getting Current Calculation Expression", () => {
    const currentCalculationExpressionFromCalculationExpressionActiveRecord =
      calculator.getExpression();
    const currentCalculationExpressionFromCalculator =
      calculator.getExpression();

    expect(currentCalculationExpressionFromCalculator).equal(
      currentCalculationExpressionFromCalculationExpressionActiveRecord,
    );
  });

  it("Test Adding Chose Character On Calculation Expression", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).equal(CalculatorCharacters.ONE);
  });

  it("Test Removing Last Character Of Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.backspace();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).equal(CalculatorCharacters.ONE);
  });

  it("Test Removing All Character From Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.clean();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).equal("");
  });

  it("Test Evaluating Calculation Expression", () => {
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ADDITION,
    );
    calculationExpressionActiveRecord.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    calculator.evaluate();

    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).equal(CalculatorCharacters.TWO);
  });
});
