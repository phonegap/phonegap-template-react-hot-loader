import classNames from 'classnames';
import React from 'react';
import Tappable from 'react-tappable';

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
		const { currentStep, availableSteps, totalSteps } = this.props;
		const nextClass = classNames({
			'button': true,
			'button-next': true,
			'button-disabled': currentStep >= availableSteps,
			'hidden': currentStep === totalSteps
		});
		const style = {
			background: `url(/images/step-${currentStep}.jpg) no-repeat center center fixed; background-size: cover;`
		};
		return (
			<div className='step' style={style}>
				<Tappable className='button button-previous' onTap={this.prev}/>
				<Tappable className={nextClass} onTap={this.next}/>
			</div>
		);
	}
});

module.exports = Step;
