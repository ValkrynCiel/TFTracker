import React from 'react';
import styled from 'styled-components';
import { convertToEndpoint, formatTier } from './helper';

const Wrapper = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 20px auto;
`
const Title = styled.div`
  border: 2px solid #ddd;
  font-size: 15px;
  color: #777;
  text-align: center;
  padding: 7px;
  background-color: #eee;
`
const Details = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  text-align: left;
  justify-content: space-around;
  background-color: #fafafa;
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

  

  return (
    <Wrapper>
      <Title><b>Ranked Statistics</b></Title>
      <Details>
        <Img src={require(`../../assets/ranks/${convertToEndpoint(tier, rank)}`)} />
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