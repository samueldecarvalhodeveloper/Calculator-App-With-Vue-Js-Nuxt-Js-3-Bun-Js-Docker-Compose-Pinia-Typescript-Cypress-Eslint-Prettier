import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../../../../constants/domains/calculator_constants";
import CalculatorCharacters from "../../../../../../domains/calculator/calculator_characters";
import CalculatorSpecifications from "../../../../../../domains/calculator/infrastructure/calculator_specifications";

describe('Test Class "CalculatorSpecifications" Behavior', () => {
  it('Test If Method "isCalculationExpressionEqualToNotValidExpressionExceptionMessage" Returns True If Expression Is Equal To Not Valid Expression Exception Message', () => {
    const expressionIsNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        NOT_VALID_EXPRESSION_ERROR_MESSAGE,
      );
    const expressionIsNotNotValidExpressionExceptionMessage =
      CalculatorSpecifications.isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(expressionIsNotValidExpressionExceptionMessage).equals(true);
    expect(expressionIsNotNotValidExpressionExceptionMessage).equals(false);
  });

  it('Test If Method "isCalculationExpressionEmpty" Returns True If Calculation Expression Is Empty', () => {
    const calculationExpressionIsEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty("");
    const calculationExpressionIsNotEmpty: boolean =
      CalculatorSpecifications.isCalculationExpressionEmpty(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsEmpty).equals(true);
    expect(calculationExpressionIsNotEmpty).equals(false);
  });

  it('Test If Method "isCalculationExpressionInfinity" Returns True If Calculation Expression Is Infinity', () => {
    const calculationExpressionIsInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        Infinity.toString(),
      );
    const calculationExpressionIsNotInfinity: boolean =
      CalculatorSpecifications.isCalculationExpressionInfinity(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionIsInfinity).equals(true);
    expect(calculationExpressionIsNotInfinity).equals(false);
  });
});
