import React, { useContext, useRef } from "react";
import logo from "../../assets/icon/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { UserAuth } from "../../App";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const [loginUser, setLoginUser] = useContext(UserAuth);
	let navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/";

	// handle user login email and password
	const handleSubmit = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		await signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const user = result.user;
				toast.success("User login successfully");
				setLoginUser(user);

				if (user.uid) {
					navigate(from, { replace: true });
				}
			})
			.catch(error => {
				errorMessage(error);
			});
	};

	// handle forget password
	const handleForgetPassword = () => {
		const email = emailRef.current.value;
		sendPasswordResetEmail(auth, email)
			.then(() => toast.success("Please check your email and new password set"))
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
					<Link
						onClick={handleForgetPassword}
						to='/login'
						className='text-decoration-none text-primary d-block mb-3 fw-bold'>
						Forget Password ?
					</Link>
					<input
						type='submit'
						className='form-control btn btn-dark'
						value='Login'
					/>
				</form>
				<div className='text-center pt-3'>
					<small>Don't have account ?</small>
					<Link
						to='/singup'
						className='text-decoration-none text-dark mx-2 fw-bold'>
						Singup Now
					</Link>
				</div>
				<GoogleLogin />
			</div>
		</div>
	);
};

export default Login;
