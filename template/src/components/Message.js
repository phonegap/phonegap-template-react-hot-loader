import '../css/message.css';

import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  displayName: 'Message',

  propTypes: {
    message: React.PropTypes.string,
  },

  render() {
    const { message } = this.props;
    const msg = message
      ? <div className="hello-message" key="has-msg">{ message }</div>
      : <div key="no-msg"></div>
    return (
      <CSSTransitionGroup transitionName="fade-message"
          transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
        { msg }
      </CSSTransitionGroup>
    );
  }
});
