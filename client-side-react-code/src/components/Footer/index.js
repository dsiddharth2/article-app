import React from 'react';
import './style.footer.css';

class Footer extends React.Component {
	render() {
		return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Version</b> 1.0.0
                </div>
                <strong>Copyright &copy; 2014-2019 <a href="#">Siddharth</a>.</strong> All rights reserved.
            </footer>
        );
	}
}

export default Footer;
