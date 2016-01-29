import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import StepStore from './stores/step';

import Start from './components/Start';
import Step from './components/Step';

const App = React.createClass({
	getInitialState () {
		return StepStore.getState();
	},
	componentWillMount () {
		StepStore.addChangeListener(this.updateStateFromStore);
	},
	componentWillUnmount () {
		StepStore.removeChangeListener(this.updateStateFromStore);
	},
	updateStateFromStore () {
		this.setState(StepStore.getState());
	},
	renderCurrentStep () {
		const { currentStep, availableSteps, totalSteps } = this.state;
		return currentStep === 0
			? <Start key="start" />
			: <Step key={'step-' + currentStep}
				currentStep={currentStep}
				availableSteps={availableSteps}
				totalSteps={totalSteps} />;
	},
	render () {
		const transitionName = this.state.direction === 'next' ? 'step' : 'step-prev';
		return (
			<div>
				<CSSTransitionGroup
					transitionName={transitionName}
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}
					>
					{this.renderCurrentStep()}
				</CSSTransitionGroup>
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
