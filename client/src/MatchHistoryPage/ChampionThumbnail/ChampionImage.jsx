import React, {Component} from 'react';
import styled from 'styled-components';

const Champion = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  border-radius: 7px;
  border: 3px solid green;
  box-sizing: border-box;
`

export default class ChampionImage extends Component {
  render() {
    return (
      <Champion src={this.props.src} />
    );
  }
}