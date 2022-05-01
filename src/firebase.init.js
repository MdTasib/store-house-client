import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyA51ra50qYlVFu4sqMslBhFWda65mTzTVs",
	authDomain: "photography-studiobd.firebaseapp.com",
	projectId: "photography-studiobd",
	storageBucket: "photography-studiobd.appspot.com",
	messagingSenderId: "966911092276",
	appId: "1:966911092276:web:ea9db960baa9be95960c61",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
