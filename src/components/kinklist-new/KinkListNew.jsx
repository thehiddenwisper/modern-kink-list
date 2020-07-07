import React, { Component } from 'react';
import './KinkListNew.scss';

export default class KinkListNew extends Component {
	render() {
		return (
			<React.Fragment>
				<div id="home">
					<div id="info">
						<div>
							Your Name(Will be shown at the top of the kink list)
						<input type="text" label="asdf"></input>
						</div>
						<div>
							Password(will be used so you can edit this later)
						<input type="password"></input>
						</div>

						<a href="/kinklist/xyzwwwsy">Submit</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
