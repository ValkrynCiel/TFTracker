import React, {Component} from 'react';
import styled from 'styled-components';

const colors = {
  0: "#BBBBBB",
  1: "#14CC73",
  2: "#53C2FD",
  3: "#DE0EBD",
  4: "#FEC430"
}

const Champion = styled.img`
  display: block;
  max-width: 100%;
  position: relative;
  border-radius: 7px;
  border: ${props => `3px solid ${colors[props.rarity]}`};
  box-sizing: border-box;
`

export default class ChampionImage extends Component {
  render() {
    return (
      <Champion rarity={this.props.rarity} src={this.props.src} />
    );
  }
}