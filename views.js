'use strict';

const views = (function views() {
  return {
    Intent: {
      Launch: {
        tell: 'Welcome!'
      },
      Help: {
        say: 'Some help text here.',
      },
      Question: {
        ask: '{Question}', 
          reprompt: 'Hello'
      },
      Thanks: {
        say: 'Thank you for participating with this survey',
      }
    }
  };
});
module.exports = views;
