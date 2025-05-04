import CalculationExpression from "../../../../../domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../../../domains/calculator/calculation_expression_active_record";
import CalculationExpressionRegister from "../../../../../domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";

describe('Test Class "CalculationExpressionActiveRecord" Behavior', () => {
  let calculationExpressionActiveRecord: CalculationExpressionActiveRecord;
  let calculationExpressionRegister: CalculationExpressionRegister;

  before(() => {
    const calculationExpression: CalculationExpression =
      new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
    calculationExpressionActiveRecord = new CalculationExpressionActiveRecord(
      calculationExpressionRegister,
    );
  });

  beforeEach(() => {
    calculationExpressionRegister.setCalculationExpression("");
  });

  it('Test If Method "getCalculationExpression" Returns Current Calculation Expression', () => {
    const currentCalculationExpression =
      calculationExpressionActiveRecord.getCalculationExpression();

    expect(currentCalculationExpression).equals("");
  });

  it('Test If Method "removeLastCharacterFromCalculationExpression" Removes Calculation Expression Last Character', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.removeLastCharacterFromCalculationExpression();

    const expressionWithoutLastCharacter =
      calculationExpressionRegister.getCalculationExpression();

    expect(expressionWithoutLastCharacter).equals(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });

  it('Test if Method "turnCalculationExpressionEmpty" Removes All Characters From Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.turnCalculationExpressionEmpty();

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).equals("");
  });

  it('Test if Method "evaluateCalculationExpression" Evaluates Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    calculationExpressionActiveRecord.evaluateCalculationExpression();

    const evaluatedCalculationExpression: string =
      calculationExpressionRegister.getCalculationExpression();

    expect(evaluatedCalculationExpression).equals(CalculatorCharacters.TWO);
  });
});
