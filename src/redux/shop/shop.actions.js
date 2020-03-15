import shorpActionsTypes from "./shop.types";

export const updateCollection = collectionMap => ({
  type: shorpActionsTypes.UPDATE_COLLECTION,
  payload: collectionMap
});
