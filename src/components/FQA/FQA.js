import React from "react";
import deliverImg from "../../assets/images/stock.gif";

const FQA = () => {
	return (
		<div className='my-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-md-6'>
						<h5 className='fw-bold'>Why is Destar the best choice for you?</h5>
						<small>
							If you still have any doubts about choosing our company, here are
							three main reasons why our clients choose us.
						</small>
						<div className='accordion pt-4' id='accordionExample'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingOne'>
									<button
										className='accordion-button bg-dark text-white'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'>
										A Personal Service
									</button>
								</h2>
								<div
									id='collapseOne'
									className='accordion-collapse collapse show'
									aria-labelledby='headingOne'
									data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										Our commitment to our customers is to ensure efficient,
										reliable and trouble free management of your freight
										requirements - by providing the very best service along with
										the highly affordable rates available to all our clients
									</div>
								</div>
							</div>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingTwo'>
									<button
										className='accordion-button collapsed  bg-dark text-white'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'>
										Customer-Tailored Freight Options
									</button>
								</h2>
								<div
									id='collapseTwo'
									className='accordion-collapse collapse'
									aria-labelledby='headingTwo'
									data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										Multiple modes of freight transportation: intermodal, LTL,
										truckload, flatbed, temperature controlled, bulk and final
										mile services. Supported industries: food & beverage, wine &
										spirits plastics & packaging, agriculture.
									</div>
								</div>
							</div>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingThree'>
									<button
										className='accordion-button collapsed bg-dark text-white'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'>
										Professional Cargo Tracking
									</button>
								</h2>
								<div
									id='collapseThree'
									className='accordion-collapse collapse'
									aria-labelledby='headingThree'
									data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										With our innovative solutions, you can manage your freight,
										bulk and container transport at the click of a button online
										- anytime, anywhere. We use, web-based software to track and
										trace all cargos that we operate with.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 text-end'>
						<img src={deliverImg} className='w-100' alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FQA;
