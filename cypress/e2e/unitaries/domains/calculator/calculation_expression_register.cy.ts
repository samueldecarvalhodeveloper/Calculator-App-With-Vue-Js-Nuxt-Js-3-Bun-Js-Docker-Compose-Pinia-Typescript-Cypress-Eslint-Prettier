import CalculationExpression from "../../../../../domains/calculator/calculation_expression";
import CalculationExpressionRegister from "../../../../../domains/calculator/calculation_expression_register";
import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";

describe('Test Class "CalculationExpressionRegister" Behavior', () => {
  let calculationExpression: CalculationExpression;
  let calculationExpressionRegister: CalculationExpressionRegister;

  before(() => {
    calculationExpression = new CalculationExpression("");
    calculationExpressionRegister = new CalculationExpressionRegister(
      calculationExpression,
    );
  });

  beforeEach(() => {
    calculationExpression.setCalculationExpression("");
  });

  it('Test If Method "getCalculationExpression" Returns Current Calculation Expression', () => {
    calculationExpression.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpressionRegister.getCalculationExpression();

    expect(currentCalculationExpression).equals(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "setCalculationExpression" Sets Calculation Expression', () => {
    calculationExpressionRegister.setCalculationExpression(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).equals(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });

  it('Test If Method "addCharacterToCalculationExpression" Add Chose Character To Calculation Expression', () => {
    calculationExpressionRegister.addCharacterToCalculationExpression(
      CalculatorCharacters.ONE,
    );

    const currentCalculationExpression =
      calculationExpression.getCalculationExpression();

    expect(currentCalculationExpression).equals(CalculatorCharacters.ONE);
  });
});
