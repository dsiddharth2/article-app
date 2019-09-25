import React from 'react';

class TableListing extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="row">
				<div className="col-md-6">
					<div className="box">
						<div className="box-body">
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>#</th>
										<th>Article Title</th>
										<th>Article Description</th>
									</tr>
									{
										this.props.allArticles.map(el => (
											<tr key={el.id}>
												<td> {el.id} </td>
												<td> {el.title} </td>
												<td>
													<p>
														{el.body}
													</p>
												</td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TableListing;
