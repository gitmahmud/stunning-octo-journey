import React from 'react';
import Sound from 'react-sound'

class MyComponentWithSound extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    url: this.props.url
	  };
	}
  render() {
    return <Sound
      url={this.props.url}
      playStatus={Sound.status.PLAYING}
      playFromPosition={0 /* in milliseconds */}
    />;
  }
}