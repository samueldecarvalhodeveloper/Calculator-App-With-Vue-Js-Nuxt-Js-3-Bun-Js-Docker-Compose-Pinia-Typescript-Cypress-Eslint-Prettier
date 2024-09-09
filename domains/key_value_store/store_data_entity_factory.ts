import StoreDataEntity from "./infrastructure/entities/store_data_entity";
import type { StoreValue } from "./infrastructure/environment/typescript/types";

class StoreDataEntityFactory {
  private constructor() {}

  public static getInstance(data: StoreValue): StoreDataEntity {
    return new StoreDataEntity(data);
  }
}

export default StoreDataEntityFactory;
