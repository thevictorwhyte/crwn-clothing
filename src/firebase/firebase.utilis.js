import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkBaKt5hB5HPZ64QcphLWR0D_TLyhC9Wk",
    authDomain: "crwn-db-bee59.firebaseapp.com",
    databaseURL: "https://crwn-db-bee59.firebaseio.com",
    projectId: "crwn-db-bee59",
    storageBucket: "crwn-db-bee59.appspot.com",
    messagingSenderId: "1011999558101",
    appId: "1:1011999558101:web:2facd475e81105abf3955c",
    measurementId: "G-ZJGST0WQLV"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email} = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

  export default firebase;