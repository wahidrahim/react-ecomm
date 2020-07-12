import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  collections,
});

export const fetchCollectionsError = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  error,
});

export const fetchCollectionsAsync = () => {
  return async (dispatch) => {
    const collectionRef = firestore.collection('collections');

    try {
      dispatch(fetchCollectionsStart());

      const snapshot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      dispatch(fetchCollectionsError(error.message));
    }
  };
};
