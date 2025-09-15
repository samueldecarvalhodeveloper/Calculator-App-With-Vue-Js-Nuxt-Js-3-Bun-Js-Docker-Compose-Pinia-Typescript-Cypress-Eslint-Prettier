import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../../constants/user_interface_constants";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";
import CalculatorFactory from "../../../../../domains/calculator/calculator_factory";

describe('Test Class "CalculatorFactory" Behavior', () => {
  it('Test If Method "getInstance" Returns A Working Instance', () => {
    const calculator = CalculatorFactory.getInstance(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    expect(calculator.getExpression()).equals(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    calculator.clean();

    expect(calculator.getExpression()).equals("");

    calculator.addCharacter(CalculatorCharacters.ONE);

    expect(calculator.getExpression()).equals(CalculatorCharacters.ONE);

    calculator.backspace();

    expect(calculator.getExpression()).equals("");
  });
});
