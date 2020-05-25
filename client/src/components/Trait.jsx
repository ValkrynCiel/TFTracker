import React from 'react';
import styled from 'styled-components';
import background from '../assets/set3/traits/bg.png';
import traits from '../assets/set3/traits.json';
import {StyledLink} from './StyledLink';

const Wrapper = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 39px;
  width: 36px;
  background-size: cover;
  background-position: ${props => {
    let index = props.rank + 1;
    return "calc(" + 100/5*index + "% - 1px) 0;" 
  }}
  display: inline-flex;
  margin: 2px;
  position: relative;
  img {
    margin: auto;
    display: block;
    width: 32px;
    height: 32px;
  }
`

const UnitCount = styled.div`
  position: absolute;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  right: -5px;
  bottom: -5px;
  font-size: 12px;
  background-color: black;
  display: flex;
  p {
    display: block;
    margin: auto;
  }
`

export const Trait = (props) => {
  let fileName = props.name.replace('Set3_', '').toLowerCase();
  return (
    <StyledLink to={`/traits/${props.name}`}>
      <Wrapper rank={ props.rank }>
        <img src= { require(`../assets/set3/traits/${fileName}.png`) }/>
        <UnitCount><p>{props.num}</p></UnitCount>
      </Wrapper>
    </StyledLink>
  )
}