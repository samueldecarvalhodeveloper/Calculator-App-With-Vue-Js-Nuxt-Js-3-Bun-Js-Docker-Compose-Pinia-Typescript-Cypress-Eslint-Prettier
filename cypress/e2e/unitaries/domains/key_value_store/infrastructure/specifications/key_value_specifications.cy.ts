import {
  LAST_CALCULATION_VALUE,
  LAST_SESSION_CALCULATION_KEY,
} from "../../../../../../../constants/domains/calculator_constants";
import KeyValueSpecifications from "../../../../../../../domains/key_value_store/infrastructure/specifications/key_value_specifications";
import KeyValueStore from "../../../../../../../domains/key_value_store/key_value_store";

describe('Test Class "KeyValueSpecifications" Behavior', () => {
  it('Test If Method "isStringifiedDataFromStoreAnEmptyString" Returns True If Stringified Stored Data Is An Empty String', () => {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const stringifiedStoredData: string = localStorage.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(""),
    ).equals(true);
    expect(
      KeyValueSpecifications.isStringifiedDataFromStoreAnEmptyString(
        stringifiedStoredData,
      ),
    ).equals(false);
  });
});
