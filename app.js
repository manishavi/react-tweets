/** @jsx React.DOM */

const React = require('react');
const TweetsApp = require('./components/TweetsApp.react');

// Snag the initial state that was passed from the server side
const initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.renderComponent(
  <TweetsApp tweets={initialState}/>,
  document.getElementById('react-app')
);