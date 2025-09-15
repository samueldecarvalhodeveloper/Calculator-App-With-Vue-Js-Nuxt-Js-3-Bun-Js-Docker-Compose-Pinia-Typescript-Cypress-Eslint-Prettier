import { defineStore } from "pinia";
import LastSessionCalculationExpressionStore from "../infrastructure/anticorruption_layer/last_session_calculation_expression_store";
import CalculatorFactory from "../domains/calculator/calculator_factory";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import { CALCULATOR_STORE_NAME } from "../constants/user_interface_constants";
import Calculator from "../domains/calculator/calculator";
import CalculatorCalculationExpressionReconciliator from "../infrastructure/concerns/calculator_calculation_expression_reconciliator";
import UpdateCalculatorValueAdapter from "../infrastructure/concerns/update_calculator_value_adapter";

const calculator: Calculator = CalculatorFactory.getInstance("");

const useCalculatorStore = defineStore(CALCULATOR_STORE_NAME, {
  state: () => {
    return { value: "" };
  },
  actions: {
    loadLastSessionCalculationExpression() {
      CalculatorCalculationExpressionReconciliator.reconciliateCalculatorCalculationExpression(
        calculator,
      );

      this.value = LastSessionCalculationExpressionStore.getExpression();
    },
    addCharacter(calculatorCharacters: CalculatorCharacters) {
      calculator.addCharacter(calculatorCharacters);

      UpdateCalculatorValueAdapter.updateCalculatorValue(this, calculator);
    },
    backspace() {
      calculator.backspace();

      UpdateCalculatorValueAdapter.updateCalculatorValue(this, calculator);
    },
    clean() {
      calculator.clean();

      UpdateCalculatorValueAdapter.updateCalculatorValue(this, calculator);
    },
    evaluate() {
      calculator.evaluate();

      UpdateCalculatorValueAdapter.updateCalculatorValue(this, calculator);
    },
  },
});

export default useCalculatorStore;
