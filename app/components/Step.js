import React from 'react';

import '../css/step.css';

const Step = React.createClass({

  displayName: 'Step',

  render: function() {
    return (
      <div className='step'>
        <a href='#' className='button button-previous'>&#9650;</a>
        <a href='#' className='button button-next'>&#9660;</a>
      </div>
    );
  }
});

module.exports = Step;
