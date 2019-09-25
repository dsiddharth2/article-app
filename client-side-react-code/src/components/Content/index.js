import React from 'react';

class Content extends React.Component {
	render() {
        if(this.props.type === "header") {
            return (
                <section className="content-header">
                    {this.props.children}
                </section>
            );
        } else {
            return (
                <section className="content">
                    {this.props.children}
                </section>    
            );
        }
	}
}

export default Content;
