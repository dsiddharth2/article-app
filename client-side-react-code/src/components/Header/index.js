import React from 'react';
import './style.header.css';

class Header extends React.Component {
	render() {
		return (
            <header className="main-header">
                <a href="index2.html" className="logo">                    
                    <span className="logo-lg"><b>Article </b>APP</span>
                </a>
                <nav className="navbar navbar-static-top">
                </nav>
            </header>
        );
	}
}

export default Header;
