import React from 'react';
import styled from 'styled-components';
import {formatEndpoint, formatRank} from './helper';

const Wrapper = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 35px auto;
  border-radius: 10px;
  overflow: hidden;
`
const Title = styled.div`
  font-size: 15px;
  text-align: center;
  padding: 10px;
  background-image: linear-gradient(to top, rgb(39, 54, 82) 0%, rgb(32, 43, 67) 100%);
`
const Details = styled.div`
  height: 200px;
  width: 100%;
  align-items: center;
  text-align: left;
  background-color: #202B43;
  display: flex;
  h1 {
    margin-top: 0;
  }
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  display: block;
  margin-right: 20px;
`;


export const RankedDetails = (props) => {
  let {
    rank, 
    wins,
    losses,
    leaguePoints,
    tier, 
  } = props;

  tier = tier ? tier.toLowerCase() : 'unranked';

  let endpoint = formatEndpoint(tier, rank);
  debugger
  return (
    <Wrapper>
      <Title><b>Ranked Statistics</b></Title>
      <Details>
        <Img src={require(`../../../assets/ranks/${endpoint}`)} />
        <div className='text'>
          <h1>{`${formatRank(tier, rank)}`}</h1>
          {tier === 'unranked' ? null :
            <>
              <h4>LP: {leaguePoints}</h4>
              <span>Top 1: {wins}</span><br/>
              <span>Games Played: {wins+losses}</span> 
            </>}
        </div>
      </Details>
    </Wrapper>
  );
}