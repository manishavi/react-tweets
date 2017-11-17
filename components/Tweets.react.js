/** @jsx React.DOM */

const React = require('react');
const Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({

  // Render our tweets
  render: function(){

    // Build list items of single tweet components using map
    const content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });
    
    // Return ul filled with our mapped tweets
    return (
      <ul className="tweets">{content}</ul>
    )

  }

}); 