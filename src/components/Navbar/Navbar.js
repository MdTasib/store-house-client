import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../App";
import logo from "../../assets/icon/logo.png";
import auth from "../../firebase.init";

const Navbar = () => {
	const [loginUser, setLoginUser] = useContext(UserAuth);

	// auth state changed
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				setLoginUser(user);
			} else {
				setLoginUser({});
			}
		});
	}, [setLoginUser]);

	// user log out implement
	const handleLogOut = () => {
		signOut(auth).then(() => {});
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-black'>
			<div className='container'>
				<Link className='navbar-brand d-flex align-items-center' to='/'>
					<img src={logo} height='40' alt='' />
					<small className='pt-2 ps-4 text-warning'>STORE HOUSE</small>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav ms-auto'>
						<li className='nav-item'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								Home
							</Link>
						</li>
						{loginUser.uid ? (
							<>
								<li className='nav-item'>
									<Link className='nav-link' to='/addItem'>
										Add Item
									</Link>
								</li>
								<li className='nav-item'>
									<Link className='nav-link' to='/manageItem'>
										Manage Item
									</Link>
								</li>
							</>
						) : (
							""
						)}
						<li className='nav-item'>
							{loginUser.uid ? (
								<button
									onClick={handleLogOut}
									className='btn btn-sm btn-light mt-1'>
									Log out
								</button>
							) : (
								<Link className='nav-link' to='/login'>
									Login
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
