<table className='table table-dark table-striped mb-0'>
			<thead>
				<tr>
					<th scope='col'>Name</th>
					<th scope='col'>Description</th>
					<th scope='col'>Price</th>
					<th scope='col'>Quantity</th>
					<th scope='col'>Id</th>
					<th scope='col'>Supplier</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{product?.name}</td>
					<td>{product?.description}</td>
					<td>{product?.price}</td>
					<td>{product?.quantity}</td>
					<td>{product?._id}</td>
					<td>{product?.supplier}</td>
				</tr>
			</tbody>
		</table>
