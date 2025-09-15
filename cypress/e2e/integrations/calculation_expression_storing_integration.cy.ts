import { LAST_SESSION_CALCULATION_KEY } from "../../../constants/domains/calculator_constants";
import CalculationExpression from "../../../domains/calculator/calculation_expression";
import CalculationExpressionActiveRecord from "../../../domains/calculator/calculation_expression_active_record";
import CalculationExpressionActiveRecordDecorator from "../../../domains/calculator/calculation_expression_active_record_decorator";
import CalculationExpressionRegister from "../../../domains/calculator/calculation_expression_register";
import Calculator from "../../../domains/calculator/calculator";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";

describe('Test If Integration Of "Calculation Expression Storing" Behavior', () => {
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

  it("Test If I Can Store Current Calculation Expression From Calculator On Key Value Store", () => {
    calculator.addCharacter(CalculatorCharacters.ONE);
    calculator.addCharacter(CalculatorCharacters.ADDITION);
    calculator.addCharacter(CalculatorCharacters.ONE);

    const currentCalculationExpression = calculator.getExpression();

    KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_KEY,
      currentCalculationExpression,
    );

    const storedCalculationExpression = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    );

    expect(storedCalculationExpression).equals(currentCalculationExpression);
  });
});
