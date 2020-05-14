import React, {Component} from 'react';
import styled from 'styled-components';

const ItemImage = styled.img`
  display: block;
  border-radius: 10%;
  margin: 1px;
  height: 12px;
`

class Item extends Component {
  render() {
    let id = this.props.id > 10 ? `${this.props.id}` : `0${this.props.id}`;
    return (
      <ItemImage src={require(`../../assets/set3/items/${id}.png`)} />
    )
  }
}

export default Item;