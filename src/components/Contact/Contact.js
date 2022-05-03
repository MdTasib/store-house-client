import React from "react";

const Contact = () => {
	return (
		<div className='bg-light py-4'>
			<div className='container bg-white p-5 rounded'>
				<h3 className='text-center fw-bold pb-3'>CONTACT US</h3>
				<form class='row g-3'>
					<div class='col-md-6'>
						<label class='form-label'>First Name</label>
						<input type='text' class='form-control' />
					</div>
					<div class='col-md-6'>
						<label class='form-label'>Last Name</label>
						<input type='text' class='form-control' />
					</div>
					<div class='col-12'>
						<label class='form-label'>Your Email</label>
						<input type='email' class='form-control' />
					</div>
					<div class='col-12'>
						<label class='form-label'>Your Message</label>
						<textarea class='form-control' rows='4'></textarea>
					</div>
					<div class='col-12 text-center'>
						<button onClick={e => e.preventDefault()} class='btn btn-dark'>
							SEND MESSAGE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
