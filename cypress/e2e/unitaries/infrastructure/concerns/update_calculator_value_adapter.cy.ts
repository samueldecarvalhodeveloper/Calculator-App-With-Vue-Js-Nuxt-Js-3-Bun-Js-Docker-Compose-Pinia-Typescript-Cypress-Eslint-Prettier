import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../../../constants/user_interface_constants";
import CalculatorFactory from "../../../../../domains/calculator/calculator_factory";
import UpdateCalculatorValueAdapter from "../../../../../infrastructure/concerns/update_calculator_value_adapter";

describe('Test Class "UpdateCalculatorValueAdapter" Behavior', () => {
  it('Test If Method "updateCalculatorValue" Updates User Interface Calculator Value State With Current Calculator Calculation Expression', () => {
    const userInterfaceCalculatorValue = { value: "" };

    const calculator = CalculatorFactory.getInstance(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    UpdateCalculatorValueAdapter.updateCalculatorValue(
      userInterfaceCalculatorValue,
      calculator,
    );

    expect(userInterfaceCalculatorValue.value).equals(
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );
  });
});
