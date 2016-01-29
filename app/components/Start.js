import React from 'react';

import '../css/start.css';

const Start = React.createClass({

  displayName: 'Start',

  render: function() {
    return (
      <div className='start'>
        <input name='start' type='button' value='Get Started'
            className='button-getstarted'/>
      </div>
    );
  }
});

module.exports = Start;
