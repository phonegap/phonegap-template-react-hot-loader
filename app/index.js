import './css/main.css';

const React = require('react');
const ReactDOM = require('react-dom');

import Start from './components/Start';
import Step from './components/Step';

const App = React.createClass({
  getInitialState () {
    return {
      currentStep: 0,
      availableSteps: 2,
      totalSteps: 4,
    };
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
    //const steps = [];
    //steps.push(<Start currentStep={this.state.currentStep} />)
    //for (var i = 1; i <= this.state.totalSteps; i++) {
      //steps.push(<Step currentStep={this.state.currentStep} thisStep={i} />);
    //}
		//return <div>{steps}</div>;

	},
});

ReactDOM.render(<App />, document.getElementById('app'));
