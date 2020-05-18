import React, { Component } from 'react';
import styled from 'styled-components';

import ChampionImage from './ChampionImage';
import StarImage from './StarImage';
import Item from './Item';
import getChampionReference from './helper';

const reference = getChampionReference();

const ChampionContainer = styled.div`
  margin: 10px 5px;
  margin-bottom: 0px;
  display: inline-block;
  width: 40px;
  vertical-align: middle;
`
const ChampionInfoContainer = styled.div`
  width: 100%;
  position: relative;
`

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2px;
  height: 15px;
`;

class ChampionThumbnail extends Component {
  render () {
    const { tier, id, rarity, items } = this.props;
    return (
      <ChampionContainer>
        <ChampionInfoContainer>
          {tier > 1 ? <StarImage src={require(`../../assets/tft-star-${tier}.png`)} /> : null}
          <ChampionImage src={require(`../../assets/set3/champions/${id.replace('TFT3_', '').toLowerCase()}.png`)} rarity={rarity} alt="product" />
        </ChampionInfoContainer>
        <ItemContainer>
          {items.map((id, i) => <Item key={i} id={id} />)}
        </ItemContainer>
      </ChampionContainer>
    );
  };
};

export default ChampionThumbnail;