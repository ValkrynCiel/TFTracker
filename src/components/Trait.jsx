import React from 'react';
import styled from 'styled-components';
import background from '../assets/set3/traits/bg.png';

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
  img {
    margin: auto;
    display: block;
    width: 32px;
    height: 32px;
  }
`

export const Trait = (props) => {
  let fileName = props.name.replace('Set3_', '').toLowerCase();
  return (
    <Wrapper rank={ props.rank }>
      <img src= { require(`../assets/set3/traits/${fileName}.png`) }/>
    </Wrapper>
  )
}