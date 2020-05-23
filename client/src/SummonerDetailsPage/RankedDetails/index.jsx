import React from 'react';
import styled from 'styled-components';
import {formatEndpoint, formatTier} from './helper';

const Wrapper = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
`
const Title = styled.div`
  font-size: 15px;
  color: rgb(121, 134, 163);
  text-align: center;
  padding: 7px;
  background-image: linear-gradient(to top, rgb(39, 54, 82) 0%, rgb(32, 43, 67) 100%);
`
const Details = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  justify-content: space-around;
  background-color: #202B43;
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  display: block;
`;


export const RankedDetails = (props) => {
  let tier = props.tier.toLowerCase();
  let {
    rank, 
    wins, 
    losses, 
    leaguePoints
  } = props;

  let endpoint = formatEndpoint(tier, rank);

  return (
    <Wrapper>
      <Title><b>Ranked Statistics</b></Title>
      <Details>
        <Img src={require(`../../assets/ranks/${endpoint}`)} />
        <div>
        <h1>{`${formatTier(tier)} ${rank}`}</h1>
        <h4>LP: {leaguePoints}</h4>
        <span>Top 1: {wins}</span><br/>
        <span>Games Played: {wins+losses}</span>
        </div>
      </Details>
    </Wrapper>
  );
}