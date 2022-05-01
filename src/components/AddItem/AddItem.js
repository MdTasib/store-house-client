import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddItem = () => {
	const [user] = useAuthState(auth);

	const handleSubmit = event => {
		event.preventDefault();

		const email = user.email;
		const name = event.target.name.value;
		const description = event.target.description.value;
		const price = event.target.price.value;
		const supplier = event.target.supplier.value;
		const imageUrl = event.target.image.value;

		const url = "http://localhost:5000/addItem";
		fetch(url, {
			method: "POST",
			headers: {
				authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
				"content-type": "application/json",
			},
			body: JSON.stringify({
				email,
				name,
				description,
				price,
				supplier,
				imageUrl,
			}),
		})
			.then(res => res.json())
			.then(data => {
				event.target.reset();
				toast.success("Item Uploaded Successfully");
			});
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
