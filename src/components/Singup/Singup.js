import React, { useContext, useRef, useState } from "react";
import logo from "../../assets/icon/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	updateProfile,
} from "firebase/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { UserAuth } from "../../App";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Singup = () => {
	const [loginUser, setLoginUser] = useContext(UserAuth);
	const nameRef = useRef("");
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const confirmPasswordRef = useRef("");
	let navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	// handle user singup email, password
	const handleSubmit = event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		// check password and confirm password match
		if (password !== confirmPassword) {
			toast.error("Password must be same");
			return;
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then(result => {
					const user = result.user;
					updateUserProfile();
					userVerifyEmail();
					setLoginUser(user);
					toast.success("User created successfully");
					if (user.uid) {
						navigate(from, { replace: true });
					}
				})
				.catch(error => {
					errorMessage(error);
				});
		}
	};

	// user prifile implement (name)
	const updateUserProfile = () => {
		const name = nameRef.current.value;
		updateProfile(auth.currentUser, { displayName: name })
			.then(() => {})
			.catch(error => {
				errorMessage(error);
			});
	};

	// user verify email send
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
		<div className='singup p-5'>
			<div className='container w-50'>
				<div className='text-center pb-3'>
					<img src={logo} className='img-fluid' width='100' alt='...' />
				</div>
				<form onSubmit={handleSubmit} className='px-5'>
					<input
						data-aos='fade-left'
						ref={nameRef}
						type='text'
						className='form-control my-3'
						placeholder='Name'
						required
					/>
					<input
						data-aos='fade-right'
						ref={emailRef}
						type='email'
						className='form-control my-3'
						placeholder='Email'
						required
					/>
					<input
						data-aos='fade-left'
						ref={passwordRef}
						type='password'
						className='form-control my-3'
						placeholder='Password'
						required
					/>
					<input
						data-aos='fade-right'
						ref={confirmPasswordRef}
						type='password'
						className='form-control my-3'
						placeholder='Confirm Password'
						required
					/>
					<input
						type='submit'
						className='form-control btn btn-dark'
						value='Sing Up'
					/>
				</form>
				<div className='text-center pt-3'>
					<Link to='/login' className='text-decoration-none text-dark'>
						<small>
							Already have an account ?
							<span className='fw-bold'> Please Login</span>
						</small>
					</Link>
				</div>
				<GoogleLogin />
			</div>
		</div>
	);
};

export default Singup;
