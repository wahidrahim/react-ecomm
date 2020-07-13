import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBGuNy9YDAL2ky2fHbgBSu3WPXiSjTKSJQ',
  authDomain: 'ecomm-demo-93a3c.firebaseapp.com',
  databaseURL: 'https://ecomm-demo-93a3c.firebaseio.com',
  projectId: 'ecomm-demo-93a3c',
  storageBucket: 'ecomm-demo-93a3c.appspot.com',
  messagingSenderId: '630814969286',
  appId: '1:630814969286:web:ef0e3a81e5ca59a45676c7',
  measurementId: 'G-JXT495FLXV',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      items,
      title,
    };
  });

  const collectionsMap = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;

      return accumulator;
    },
    {}
  );

  return collectionsMap;
};

firebase.initializeApp(config);

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
