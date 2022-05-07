import React from "react";

const Blog = () => {
	return (
		<div className='container py-5'>
			<div className='card' data-aos='fade-right'>
				<div className='card-body'>
					<h4 className='card-title fw-bold'>
						Difference between javascript and node js
					</h4>
					<div className='card-text'>
						<div className='row'>
							<div className='col-md-6'>
								<h5>Javascript</h5>
								<ul>
									<li>Javascript is a programming language</li>
									<li>We can only run JS on browsers.</li>
									<li>Javascript is used in frontend development.</li>
									<li>
										Some of the javascript frameworks are RamdaJS, TypedJS, etc.
									</li>
								</ul>
							</div>
							<div className='col-md-6'>
								<h5>Node Js</h5>
								<ul>
									<li>NodeJS is a Javascript runtime environment.</li>
									<li>NodeJS helps us run JS outside the browser as well.</li>
									<li>Nodejs is used in server-side development.</li>
									<li>
										Some of the Nodejs modules are Lodash, express etc. These
										modules are to be imported from npm
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card my-3' data-aos='fade-left'>
				<div className='card-body'>
					<h4 className='card-title fw-bold'>
						Differences between sql and nosql databases
					</h4>
					<div className='card-text'>
						<div className='row'>
							<div className='col-md-6'>
								<h5>SQL</h5>
								<ul>
									<li>SQL databases are relational</li>
									<li>SQL databases are vertically scalable</li>
									<li>
										Examples - Oracle, MySQL, Microsoft SQL Server, and
										PostgreSQL
									</li>
									<li>SQL databases are table-based.</li>
								</ul>
							</div>
							<div className='col-md-6'>
								<h5>NoSQL</h5>
								<ul>
									<li>NoSQL databases are non-relational.</li>
									<li>NoSQL databases are horizontally scalable</li>
									<li>
										Example - Document: MongoDB and CouchDB, Key-value: Redis
										and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j
										and Amazon Neptune
									</li>
									<li>
										NoSQL databases are document, key-value, graph, or
										wide-column stores.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card my-3' data-aos='fade-right'>
				<div className='card-body'>
					<h4 className='card-title fw-bold'>
						When should you use node js and when should you use mongodb
					</h4>
					<p className='card-text'>
						NodeJS is a JavaScript runtime environment. It's actually helps
						JavaScript to run outside of server. It's used in server side
						development.
						<br />
						But, MongoDB is NoSQL database which is document oriented. It
						represents data as of JSON documents. It's used for store data.
						<br />
						The summary is MongoDB is a database where we can store data and
						NodeJS helps us to to connect our client site to database by it's
						server site.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
