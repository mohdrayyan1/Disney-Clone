// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBVmJYG39ExZb8oKpSs0twwHFHMCCk3xUE",
	authDomain: "disney-clone-66e90.firebaseapp.com",
	databaseURL: "https://disney-clone-66e90-default-rtdb.firebaseio.com",
	projectId: "disney-clone-66e90",
	storageBucket: "disney-clone-66e90.appspot.com",
	messagingSenderId: "954627307983",
	appId: "1:954627307983:web:d71e46ad5001dd1f38faba",
	measurementId: "G-2483NLFRD9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
export default db;