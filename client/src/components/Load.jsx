import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Load = styled.div`
  border: 4px solid #7086cc; 
  border-top: 4px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 50px auto;
  animation: 1s ${rotate} linear infinite;
`