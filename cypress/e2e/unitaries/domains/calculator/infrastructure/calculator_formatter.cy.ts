import CalculatorCharacters from "../../../../../../domains/calculator/calculator_characters";
import CalculatorFormatter from "../../../../../../domains/calculator/infrastructure/calculator_formatter";

describe('Test Class "CalculatorFormatter" Behavior', () => {
  it('Test If Method "getCalculationExpressionWithoutLastCharacter" Returns Calculation Expression Without Last Character', () => {
    const calculationExpressionWithoutLastCharacter =
      CalculatorFormatter.getCalculationExpressionWithoutLastCharacter(
        CalculatorCharacters.ONE +
          CalculatorCharacters.ADDITION +
          CalculatorCharacters.ONE,
      );

    expect(calculationExpressionWithoutLastCharacter).equals(
      CalculatorCharacters.ONE + CalculatorCharacters.ADDITION,
    );
  });
});
