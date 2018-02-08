import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 2;
    this.setState({likesCount: newLikesCount});
  }

  onReset () {
    this.setState({likesCount: 0});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        <div><button onClick={this.onReset}>Reset Likes</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;