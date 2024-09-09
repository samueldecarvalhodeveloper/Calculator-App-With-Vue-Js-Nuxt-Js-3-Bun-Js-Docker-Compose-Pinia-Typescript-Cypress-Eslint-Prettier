import { LAST_SESSION_CALCULATION_KEY } from "../../../constants/domains/calculator_constants";
import { SIMPLE_CALCULATOR_CALCULATION_EXPRESSION } from "../../../constants/user_interface_constants";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";

describe('Test Component: "KeyValueStore"; Behavior', () => {
  it("Test If Component Handles Data Input And Output Scenario Correctly", () => {
    KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_KEY,
      SIMPLE_CALCULATOR_CALCULATION_EXPRESSION,
    );

    const storedValue: string = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(storedValue).equals(SIMPLE_CALCULATOR_CALCULATION_EXPRESSION);
  });
});
