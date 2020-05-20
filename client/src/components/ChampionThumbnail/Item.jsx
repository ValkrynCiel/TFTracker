import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  display: block;
  border-radius: 10%;
  margin: 1px;
  height: 12px;
`

export const Item = (props) => {
  let id = props.id > 10 ? `${props.id}` : `0${props.id}`;
  return (
    <Img src={require(`../../assets/set3/items/${id}.png`)} />
  )
}

