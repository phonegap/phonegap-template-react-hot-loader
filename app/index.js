import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

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
			? <Start />
			: <Step
				currentStep={currentStep}
				availableSteps={availableSteps}
				totalSteps={totalSteps} />;
	},
	render () {
		return (
			<div>
				{this.renderCurrentStep()}
			</div>
		);
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
