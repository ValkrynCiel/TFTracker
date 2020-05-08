import React, {Component} from 'react';
import styled from 'styled-components';

const StarLevel = styled.img`
  width: 85%;
  z-index: 2;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translate(-50%, -50%);

`

export default class StarImage extends Component {
  render() {
    return (
      <StarLevel src={this.props.src} />
    );
  }
}