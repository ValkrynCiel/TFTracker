import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { StyledLink } from '../../../components/StyledLink';
import { ChampionThumbnail } from '../../../components/ChampionThumbnail';
import { TD } from '../../../components/TD';
import { Trait } from '../../../components/Trait';
import Companion from '../../../components/Companion';
import { galaxies } from './galaxyInfo';

export default class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeFromNow: moment(new Date(this.props.datetime)).fromNow()
    }
  }

  async componentDidMount() {
    let { datetime } = this.props;
    this.timerId = setInterval(() => {
      this.setState({
        timeFromNow: moment(new Date(datetime)).fromNow()
      })
      }, 60000);
  }

  toCardinal(num) {
    const Rank = styled.h2`
      color: ${props => {
        if (props.num === 1) return '#2ed14c';
        if (props.num < 5) return '#2473f2';
        return '#bac4d4'
      }};
      text-align: left;
      margin-top: 0px;
      font-weight: 700;
    `
    let ranking;

    if (num === 1) ranking = '1st'
    else if (num === 2) ranking = '2nd';
    else if (num === 3) ranking = '3rd';
    else ranking = `${num}th`
    
    return <Rank num={num}>{ranking}</Rank>;
  }

  getMinutesAndSeconds(){
    let dur = moment.duration(this.props.duration, 'seconds')

    return `${dur.minutes()}m ${dur.seconds()}s`
  } 

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    let { 
      placement, 
      units, 
      traits, 
      level, 
      companion: { species, skin_ID } 
    } = this.props.details;
    return (
      <tr>
        <TD>
          <StyledLink to={`/na/match/${this.props.id}`} left={1}>
              {this.toCardinal(placement)}
              <span>{this.state.timeFromNow}</span>
              <span>{this.getMinutesAndSeconds()}</span>
              <span>{galaxies[this.props.galaxy]}</span>
          </StyledLink>
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
      </tr>
    )
  }
}
