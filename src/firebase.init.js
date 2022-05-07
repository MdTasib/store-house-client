import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAM6XOhNl1VTDJybmDmJaqqasUpDRRbHTE",
	authDomain: "practice-firebase-4157f.firebaseapp.com",
	projectId: "practice-firebase-4157f",
	storageBucket: "practice-firebase-4157f.appspot.com",
	messagingSenderId: "388025200942",
	appId: "1:388025200942:web:64322fcfacb7fb65910abf",
};

// const firebaseConfig = {
// 	apiKey: process.env.APP_apiKey,
// 	authDomain: process.env.APP_authDomain,
// 	projectId: process.env.APP_projectId,
// 	storageBucket: process.env.APP_storageBucket,
// 	messagingSenderId: process.env.APP_messagingSenderId,
// 	appId: process.env.APP_appId,
// };

// console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
