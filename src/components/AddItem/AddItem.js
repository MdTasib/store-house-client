import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
	const [user, loading] = useAuthState(auth);

	const handleSubmit = event => {
		event.preventDefault();
		const name = event.target.name.value;
		const email = user.email;
	};

	return (
		<div className='singup p-5'>
			<div className='container w-50'>
				<form onSubmit={handleSubmit} className='px-5'>
					<input
						type='email'
						className='form-control my-3'
						placeholder='Email'
						value={user?.email}
						readOnly
						required
					/>
					<input
						type='text'
						className='form-control my-3'
						placeholder='Product Name'
						name='name'
						required
					/>
					<textarea
						type='text'
						className='form-control my-3'
						placeholder='Description'
						name='description'
						required
					/>
					<input
						type='text'
						className='form-control my-3'
						placeholder='Price'
						name='price'
						required
					/>
					<input
						type='text'
						className='form-control my-3'
						placeholder='Supplier Name'
						name='supplier'
						required
					/>
					<input
						type='text'
						className='form-control my-3'
						placeholder='Image URL'
						name='image'
						required
					/>
					<input
						type='submit'
						className='form-control btn btn-dark'
						value='UPLOAD'
					/>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
