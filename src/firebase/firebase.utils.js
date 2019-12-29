import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBGuNy9YDAL2ky2fHbgBSu3WPXiSjTKSJQ',
  authDomain: 'ecomm-demo-93a3c.firebaseapp.com',
  databaseURL: 'https://ecomm-demo-93a3c.firebaseio.com',
  projectId: 'ecomm-demo-93a3c',
  storageBucket: 'ecomm-demo-93a3c.appspot.com',
  messagingSenderId: '630814969286',
  appId: '1:630814969286:web:ef0e3a81e5ca59a45676c7',
  measurementId: 'G-JXT495FLXV'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase