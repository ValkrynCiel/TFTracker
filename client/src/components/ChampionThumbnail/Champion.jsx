import React from 'react';
import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

const colors = {
  0: "#BBBBBB",
  1: "#14CC73",
  2: "#53C2FD",
  3: "#DE0EBD",
  4: "#FEC430"
}

const Img = styled.img`
  display: block;
  max-width: 100%;
  position: relative;
  border-radius: 7px;
  border: ${props => `3px solid ${colors[props.rarity]}`};
  box-sizing: border-box;
`

export const Champion = (props) => {
  return (
    <StyledLink to={`/champions/${props.id}`}>
      <Img rarity={props.rarity} src={props.src} />
    </StyledLink>
  );
}