import React from 'react';

import '../css/step.css';

import StepStore from '../stores/step';

const Step = React.createClass({
	displayName: 'Step',
	next () {
		StepStore.next();
	},
	prev () {
		StepStore.prev();
	},
	render: function() {
		return (
			<div className='step'>
				<a href='#' className='button button-previous' onClick={this.prev}>&#9650;</a>
				<a href='#' className='button button-next' onClick={this.next}>&#9660;</a>
			</div>
		);
	}
});

module.exports = Step;
