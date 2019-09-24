import React from 'react';
import './App.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class App extends React.Component {
	render() {
		return (
			<div className="skin-blue">
				<div className="wrapper">
					<Header />
					<div className="content-wrapper">
						<section className="content-header">
							<h1>
								Article Listing
								<small>Listing of all the avaliable articles</small>
							</h1>
						</section>
						<section className="content">
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
													<tr>
														<td>1.</td>
														<td>Update software</td>
														<td>
															<p>
																Some Description
															</p>
														</td>
													</tr>
													<tr>
														<td>1.</td>
														<td>Update software</td>
														<td>
															<p>
																Some Description
															</p>
														</td>
													</tr>
													<tr>
														<td>1.</td>
														<td>Update software</td>
														<td>
															<p>
																Some Description
															</p>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<Footer />
				</div>			
			</div>
		);
	}
}

export default App;
