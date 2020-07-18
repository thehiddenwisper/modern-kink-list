import React, { Component } from 'react';
import './Home.scss';

export default class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="home">
					<div id="info">
						<div id="title">The Modern Online Kink Test</div>
						<div id="start-button"><a href="/kinklist/new">Start</a></div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
