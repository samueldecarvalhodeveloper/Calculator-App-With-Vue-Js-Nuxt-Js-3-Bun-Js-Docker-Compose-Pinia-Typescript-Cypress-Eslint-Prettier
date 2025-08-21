import type { StoreValue } from "../../../../../../../domains/key_value_store/infrastructure/environment/typescript/types";
import {
  LAST_CALCULATION_VALUE,
  LAST_SESSION_CALCULATION_KEY,
} from "../../../../../../../constants/domains/calculator_constants";
import { NOT_EXISTING_ITEM_ERROR_NAME } from "../../../../../../../constants/domains/key_value_store_constants";
import KeyValueDatabase from "../../../../../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";

describe('Test Class "KeyValueDatabase" Behavior', () => {
  it('Test If Method "setItem" Creates Data From Key value Database Correctly', () => {
    KeyValueDatabase.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const dataStoredInKeyValueDatabase: string = localStorage.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(dataStoredInKeyValueDatabase).equals(LAST_CALCULATION_VALUE);
  });

  it('Test If Method "getKeyData" Returns The Stored Value From Key value Database Correctly', () => {
    localStorage.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const parsedJsonFromStoredData: StoreValue =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(parsedJsonFromStoredData).equals(LAST_CALCULATION_VALUE);
  });

  it('Test If Method "getKeyData" Throws A "NotExistingKeyError" Error If Chosen Task Does Not Exist Correctly', () => {
    try {
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);
    } catch (error) {
      expect((error as Error).name).equals(NOT_EXISTING_ITEM_ERROR_NAME);
    }
  });
});
