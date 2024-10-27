import {
  LAST_CALCULATION_VALUE,
  LAST_SESSION_CALCULATION_KEY,
} from "../../../constants/domains/calculator_constants";
import KeyValueDatabase from "../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import type StoreDataEntity from "../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import type { StoreValue } from "../../../domains/key_value_store/infrastructure/environment/typescript/types";
import KeyValueDatabaseActiveRecord from "../../../domains/key_value_store/key_value_database_active_record";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import StoreDataEntityFactory from "../../../domains/key_value_store/store_data_entity_factory";

describe('Test Component "KeyValueStore" Behavior', () => {
  it("Test Storing Item In Key Value Database", () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const stringifiedDataToBeStored: string =
      JSON.stringify(storeDataToBeStored);

    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const stringifiedDataFromDatabase: string =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(stringifiedDataFromDatabase).equals(stringifiedDataToBeStored);
  });

  it("Test Getting Item Data From Key Value Database", () => {
    KeyValueDatabaseActiveRecord.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const dataFromKeyValueDatabase: StoreValue = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    );

    expect(dataFromKeyValueDatabase).equals(LAST_CALCULATION_VALUE);
  });
});
