import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD8fEekb9EvCyokNT5zXupgVJFjLI4sDjw',
  authDomain: 'crwn-clothing-69a31.firebaseapp.com',
  projectId: 'crwn-clothing-69a31',
  storageBucket: 'crwn-clothing-69a31.appspot.com',
  messagingSenderId: '427239226955',
  appId: '1:427239226955:web:081bc33142484c192bd7ce',
  measurementId: 'G-V9QX0Q41QN',
};

firebase.initializeApp(config);

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
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
