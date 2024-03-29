import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className='header'>
			<div className='overlay'></div>
			<div className='container d-flex align-items-center justify-content-center h-100'>
				<div className='text-center text-white header-info'>
					<h5 data-aos='fade-right'>
						DAILY, WEEKLY, MONTHLY, OR LONG TERM RENT
					</h5>
					<h1 className='text-warning' data-aos='fade-left'>
						STORE HOUSE
					</h1>
					<small>
						<b>A STORE HOUSE </b>
						is a building that stores products for stocking, packing, and
						shipping preparation. Store Houses are central locations that manage
						both inbound and outbound products. Maintaining a Store House is
						crucial for any business that sells physical goods or receives
						products from a wholesale marketplace.
					</small>
					<br />
					<button data-aos='fade-up' className='btn btn-light mt-4 fw-bold'>
						SHOW MORE
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
