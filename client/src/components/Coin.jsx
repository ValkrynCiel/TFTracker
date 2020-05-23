import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
`

export const Coin = () => {
  return (
    <Img src={require('../assets/coin.png')} />
  )
}