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
								Simple Tables
								<small>preview of simple tables</small>
							</h1>
							<ol className="breadcrumb">
								<li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
								<li><a href="#">Tables</a></li>
								<li className="active">Simple</li>
							</ol>
						</section>
						<section className="content">
							<div className="row">
								<div className="col-md-6">
									<div className="box">
										<div className="box-header with-border">
											<h3 className="box-title">Bordered Table</h3>
										</div>
										<div className="box-body">
											<table className="table table-bordered">
												<tr>
													<th>#</th>
													<th>Task</th>
													<th>Progress</th>
													<th>Label</th>
												</tr>
												<tr>
													<td>1.</td>
													<td>Update software</td>
													<td>
														<div className="progress progress-xs">
															<div className="progress-bar progress-bar-danger"></div>
														</div>
													</td>
													<td><span className="badge bg-red">55%</span></td>
												</tr>
											</table>
										</div>
										<div className="box-footer clearfix">
											<ul className="pagination pagination-sm no-margin pull-right">
												<li><a href="#">&laquo;</a></li>
												<li><a href="#">1</a></li>
												<li><a href="#">2</a></li>
												<li><a href="#">3</a></li>
												<li><a href="#">&raquo;</a></li>
											</ul>
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
