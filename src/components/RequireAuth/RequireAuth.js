import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	let location = useLocation();

	if (loading) {
		return (
			<div
				style={{ height: "50vh" }}
				className='p-5 d-flex align-items-center justify-content-center'>
				<div className='spinner-border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
	}

	// if user not logedin, then go to login page
	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
