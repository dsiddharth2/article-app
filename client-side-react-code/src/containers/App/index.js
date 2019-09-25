import React from 'react';
import './App.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import TableListing from '../../components/TableListing';

import {connect} from 'react-redux';

import { getArticles } from './actions';

const mapStateToProps = (state) => {
    return {
		article_list : state.articles,
		article_loading : state.loading
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListOfArticles: () => {
			dispatch(getArticles())
		}
    };
}

class App extends React.Component {
	
	constructor () {
		super();
	}

	componentDidMount() {
		this.props.getListOfArticles()
	}

	renderLoading(stateOfLoading) {
		if(stateOfLoading === true) {
			return (
				<Content type="body">
					<div className="row">
						<div className="col-md-6">
							Loading...
						</div>
					</div>
				</Content>
			);
		} else {
			return (
				<Content type="body">
					<TableListing allArticles={this.props.article_list} />
				</Content>
			);
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className="skin-blue">
				<div className="wrapper">
					<Header />
					<div className="content-wrapper">
						<Content type="header">
							<h1>
								Article Listing
								<small>Listing of all the avaliable articles</small>
							</h1>
						</Content>
						{this.renderLoading(this.props.article_loading)}
					</div>
					<Footer />
				</div>			
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
