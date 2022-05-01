import {
	GoogleAuthProvider,
	sendEmailVerification,
	signInWithPopup,
} from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../../App";
import googleIcon from "../../assets/icon/google.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
	const [loginUser, setLoginUser] = useContext(UserAuth);
	const [user, loading] = useAuthState(auth);
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	if (loading) {
		return <p>loading...</p>;
	}

	// google auth provider and implement user google sing in
	const provider = new GoogleAuthProvider();
	const handleGoogleSingin = () => {
		signInWithPopup(auth, provider)
			.then(result => {
				const currentUser = result.user;
				setLoginUser(currentUser);
				toast.success("User Singin successfully");
				setLoginUser(currentUser);
				userVerifyEmail();

				if (currentUser.uid) {
					navigate(from, { replace: true });
				}
			})
			.catch(error => {
				errorMessage(error);
			});
	};

	// send verify email
	const userVerifyEmail = () => {
		sendEmailVerification(auth.currentUser)
			.then(() => toast.success("Verify email sending"))
			.catch(error => {
				errorMessage(error);
			});
	};

	// displayed error message
	const errorMessage = error => {
		let errorMessage = error.message;
		toast.error(errorMessage.split(":")[1]);
	};
	return (
		<button
			onClick={handleGoogleSingin}
			className='btn btn-outline-warning d-flex align-items-center justify-content-between mx-auto mt-3'>
			<img src={googleIcon} width='30' alt='' />
			<span className='ms-3'>Google Singin</span>
		</button>
	);
};

export default GoogleLogin;
