import React from 'react';
import styled from 'styled-components';
import items from '../../assets/set3/items.json';
import { StyledLink } from '../StyledLink';

const Img = styled.img`
  display: block;
  border-radius: 10%;
  margin: 1px;
  height: 12px;
`

export const Item = (props) => {
  let fileName = props.id > 10 ? `${props.id}` : `0${props.id}`;

  return (
    <StyledLink to={`/items/${props.id}`}>
      <Img src={require(`../../assets/set3/items/${fileName}.png`)} />
    </StyledLink>
  )
}

