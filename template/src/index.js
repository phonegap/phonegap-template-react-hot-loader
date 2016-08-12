import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Hello from './components/Hello';

const App = React.createClass({
  getInitialState() {
    //return StepStore.getState();
    return {
      animationName: 'push',
    }
  },
  componentWillMount() {
    // Lifecycle function that is triggered just before a component mounts
  },
  componentWillUnmount() {
    // Lifecycle function that is triggered just before a component unmounts
  },
  render() {
    const { animationName } = this.state;
    return (
      <div>
        <CSSTransitionGroup transitionName={ animationName }
            transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
            {/* Remove the below component and its children */}
            {/* and replace with your own */}
            <Hello />
        </CSSTransitionGroup>
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
