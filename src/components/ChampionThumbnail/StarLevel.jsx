import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 85%;
  z-index: 2;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translate(-50%, -50%);

`

export const StarLevel = (props) => {
  return (
    <Img src={props.src} />
  );
}