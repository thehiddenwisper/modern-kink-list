import React, { Component } from 'react';
import './KinkListView.scss';

export default class KinkListView extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="home">
					<div id="info">
						<div id="title">KinkList View</div>
						<div id="start-button"><a href="/new">Start</a></div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
