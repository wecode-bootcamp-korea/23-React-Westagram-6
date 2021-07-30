import React, { Component } from 'react';

class Side extends Component {
  render() {
    return (
      <div className="bottom">
        <img src="/images/wecode.jpg" alt="wecodelog" className="circle"/>
        <div className="idWrap">
          <span className="commentId">{this.props.name}</span>
          <span className="commentContent">{this.props.comment}</span>
        </div>
        <span className="follow">팔로우</span>
      </div>
      
    );
  }
}

export default Side;