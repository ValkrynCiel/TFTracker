import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { StyledLink } from '../../../components/StyledLink';
import { ChampionThumbnail } from '../../../components/ChampionThumbnail';
import { TD } from '../../../components/TD';
import { Trait } from '../../../components/Trait';
import Companion from '../../../components/Companion';
import { Coin } from '../../../components/Coin';

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export default class Partipant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companionSrc: null,
      summonerSrc: null
    }
  }

  // async componentDidMount() {
  //   let src = await getCompanionPortraitSrc(details.companion.content_ID)
  //   this.timerId = setInterval(() => {
  //     this.setState({
  //       timeFromNow: moment(new Date(datetime)).fromNow()
  //     })
  //     }, 60000);

  //   this.setState({
  //     src
  //   })
  // }

  toCardinal(num) {
    const Rank = styled.h2`
      color: ${props => {
        if (props.num === 1) return '#2ed14c';
        if (props.num < 5) return '#2473f2';
        return '#bac4d4'
      }};
      margin: 5px auto;
      font-weight: 700;
    `
    let ranking;

    if (num === 1) ranking = '1st'
    else if (num === 2) ranking = '2nd';
    else if (num === 3) ranking = '3rd';
    else ranking = `${num}th`
    
    return <Rank num={num}>{ranking}</Rank>;
  }

  // getMinutesAndSeconds(){
  //   let dur = moment.duration(this.props.duration, 'seconds')

  //   return `${dur.minutes()}m ${dur.seconds()}s`
  // } 

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }
  displayLastRound(num) {
    let start = num - 4;
    return `${(Math.ceil(start/7)) + 1}-${start%7}`
  }
  render() {
    let { 
      placement, 
      gold_left, 
      last_round, 
      level, 
      traits, 
      units,
      name, 
      profileIconId,
      companion: { species, skin_ID }
    } = this.props;

    return (
      <tr>
        <TD>
          <StyledLink to={`/na/summoner/${name}`} >
            {this.toCardinal(placement)}
            <ProfileImg src = {`https://cdn.communitydragon.org/latest/profile-icon/${profileIconId}`} />
            <div>{name}</div>
          </StyledLink>
        </TD>
        <TD>
          {this.displayLastRound(last_round)}
        </TD>
        <TD>
          <Companion 
            species={species} 
            skinId={skin_ID} 
            level={level}
          /> 
        </TD>
        <TD className='units'>
          {units.map((u, i)=> 
            <ChampionThumbnail
              key={i} 
              id={u.character_id}
              rarity={u.rarity}
              tier={u.tier}
              items={u.items}
            />
          )} 
        </TD>
        <TD className='traits'>
          {traits.map((t, i)=> 
            t.style ?
            <Trait
              key={i} 
              num={t.num_units}
              rank={t.style}
              name={t.name}
            /> : null
          )} 
        </TD>
        <TD>
          {gold_left} <Coin src={require('../../../assets/coin.png')}/>
        </TD>
      </tr>
    )
  }
}