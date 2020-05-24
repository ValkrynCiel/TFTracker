import React, { Component } from 'react';
import styled from 'styled-components';

import { Champion } from './Champion';
import { StarLevel } from './StarLevel';
import { Item }from './Item';
import getChampionReference from './helper';

const reference = getChampionReference();

const Wrapper = styled.div`
  margin: 10px 5px;
  margin-bottom: 0px;
  display: inline-block;
  width: 40px;
  vertical-align: middle;
`
const ChampionContainer = styled.div`
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

export const ChampionThumbnail = (props) => {
  const { tier, id, rarity, items } = props;
  let championName = id.replace('TFT3_', '').toLowerCase();

  return (
    <Wrapper>
      <ChampionContainer>
        {tier > 1 ? <StarLevel src={require(`../../assets/tft-star-${tier}.png`)} /> : null}
        <Champion src={require(`../../assets/set3/champions/${championName}.png`)} rarity={rarity} alt="product" id={id}/>
      </ChampionContainer>
      <ItemContainer>
        {items.map((id, i) => <Item key={i} id={id} />)}
      </ItemContainer>
    </Wrapper>
  );
};