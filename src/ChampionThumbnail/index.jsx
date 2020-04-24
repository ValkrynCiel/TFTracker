import React, { Component } from 'react';
import styled from 'styled-components';

import ChampionImage from './ChampionImage';
import StarImage from './StarImage';

const ChampionContainer = styled.div`
  margin: 10px 5px;
`
const ChampionInfoContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
`

class ChampionThumbnail extends Component {
  render () {
    const { stars, champion } = this.props;
    return (
      <ChampionContainer>
        <ChampionInfoContainer>
          {stars > 1 ? <StarImage src={require(`../assets/tft-star-${stars}.png`)} /> : null}
          <ChampionImage src={require(`../assets/set3/champions/${champion}.png`)} alt="product" />
        </ChampionInfoContainer>
      </ChampionContainer>
    );
  };
};

export default ChampionThumbnail;