import React, { Component } from 'react';
import styled from 'styled-components';

const ChampionImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  border-radius: 7px;
  border: 3px solid green;
  box-sizing: border-box;
`

const ChampionContainer = styled.div`
  margin: 10px 5px;
`
const ChampionInfoContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`
const StarLevel = styled.div`
  position: absolute;
  background-color: black;
  height: 10px;
  width: 100%;
  top: -5px;
  z-index: 2;
`

// const Tooltip = styled.div`
//   position: absolute;
//   background-color: blue;
//   color: green;
//   height: 40px;
//   width: 40px;
//   top: 0;
//   right: 0;
//   display: none;
//   ${ChampionInfoContainer}:hover & {
//     display: block;
//   }
// `
class ChampionThumbnail extends Component {
  render () {
    return (
      <ChampionContainer>
        <ChampionInfoContainer>
          <StarLevel/>
          <ChampionImage src={require('./assets/set3/champions/ahri.png')} alt="product" />
        </ChampionInfoContainer>
      </ChampionContainer>
    );
  };
};

export default ChampionThumbnail;