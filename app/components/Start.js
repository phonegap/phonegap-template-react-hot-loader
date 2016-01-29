import React from 'react';

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
				<input
					name='start'
					type='button'
					value='Get Started'
					className='button-getstarted'
					onClick={this.start}
				/>
			</div>
		);
	},
});

module.exports = Start;
