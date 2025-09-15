import CalculatorCharacters from "../../../../../domains/calculator/calculator_characters";
import type StoreDataEntity from "../../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "../../../../../domains/key_value_store/store_data_entity_factory";

describe('Test Class: "StoreDataEntityFactory" Behavior', () => {
  it('If Test Method "getInstance" Instantiates A StoreDataEntity', () => {
    const storeDataEntity: StoreDataEntity = StoreDataEntityFactory.getInstance(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );

    expect(storeDataEntity.data).equals(
      CalculatorCharacters.ONE +
        CalculatorCharacters.ADDITION +
        CalculatorCharacters.ONE,
    );
  });
});
