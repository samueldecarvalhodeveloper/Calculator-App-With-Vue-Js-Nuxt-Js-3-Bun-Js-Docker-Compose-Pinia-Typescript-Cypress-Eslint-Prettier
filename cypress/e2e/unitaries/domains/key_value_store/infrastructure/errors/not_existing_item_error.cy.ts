import { LAST_SESSION_CALCULATION_KEY } from "../../../../../../../constants/domains/calculator_constants";
import {
  NOT_EXISTING_ITEM_ERROR_CAUSE,
  NOT_EXISTING_ITEM_ERROR_MESSAGE,
  NOT_EXISTING_ITEM_ERROR_NAME,
} from "../../../../../../../constants/domains/key_value_store_constants";
import NotExistingItemError from "../../../../../../../domains/key_value_store/infrastructure/errors/not_existing_item_error";

describe('Test Class "NotExistingItemError" Behavior', () => {
  it("Test If Error Describes How Should A Not Existing Item Error Be Used By The System Correctly", () => {
    const error: Error = new NotExistingItemError(LAST_SESSION_CALCULATION_KEY);

    expect(error.name).equals(NOT_EXISTING_ITEM_ERROR_NAME);
    expect(error.message).equals(
      NOT_EXISTING_ITEM_ERROR_MESSAGE(LAST_SESSION_CALCULATION_KEY),
    );
    expect(error.cause).equals(NOT_EXISTING_ITEM_ERROR_CAUSE);
  });
});
