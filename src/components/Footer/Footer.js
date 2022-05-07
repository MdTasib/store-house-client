import React from "react";
import logo from "../../assets/icon/logo.png";

const Footer = () => {
	return (
		<div className='bg-black py-5 text-light'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3' data-aos='fade-right'>
						<img src={logo} alt='' height='50' />
						<p className='pt-4'>
							Copyright &copy; {new Date().getFullYear()} Online STORE HOUSE
						</p>
					</div>
					<div className='col-md-3'></div>
					<div
						className='col-md-3'
						data-aos='fade-right'
						data-aos-duration='1000'>
						<ul className='list-unstyled'>
							<li>
								<small>About Online Products</small>
							</li>
							<li>
								<small>Read Out Products</small>
							</li>
							<li>
								<small>Sing Up To Deliver</small>
							</li>
							<li>
								<small>Add Your Products</small>
							</li>
						</ul>
					</div>
					<div
						className='col-md-3'
						data-aos='fade-right'
						data-aos-duration='2000'>
						<ul className='list-unstyled'>
							<li>
								<small>Get Help</small>
							</li>
							<li>
								<small>Read FQAs</small>
							</li>
							<li>
								<small>View All Clints</small>
							</li>
							<li>
								<small>STORE HOUSE</small>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
