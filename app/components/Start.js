import React from 'react';
import Tappable from 'react-tappable';

import '../css/start.css';

import StepStore from '../stores/step';

const Start = React.createClass({
	displayName: 'Start',
	start () {
		StepStore.next();
	},
	render: function() {
		return (
			<div className='start'>
				<Tappable className='button-getstarted' onTap={this.start}>
					Get Started
				</Tappable>
			</div>
		);
	},
});

module.exports = Start;
