import React, {Component} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ChampionThumbnail from '../ChampionThumbnail';
import {getCompanionPortraitSrc} from '../../helper';
import traitImg from '../../assets/set3/traits/bg.png';
import {galaxies} from './galaxyInfo';

const BG = styled.div`
  background-image: url(${traitImg});
  background-repeat: no-repeat;
  height: 39px;
  width: 36px;
  background-size: cover;
  background-position: ${props => {
    let index = props.rank + 1;
    return "calc(" + 100/5*index + "% - 1px) 0;" 
  }}
  display: inline-flex;
  margin: 2px;
  img {
    margin: auto;
    display: block;
    width: 32px;
    height: 32px;
  }
`

const TD = styled.td`
  padding: 7px 15px;
  &.units {
    width: 300px;
    text-align: left;
  }
  &.traits {
    width: 120px;
    text-align: center;
  }
  span {
    display: block;
    text-align: left;
    font-size: 12px;
  }
  &:first-child {
    padding-left: 30px;
  }
  &:last-child {
    padding-right: 30px;
  }
`

const CompanionImg = styled.img`
  margin: auto;
  height: 50px;
  width: 50px;
  display: block;
`
class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      timeFromNow: moment(new Date(this.props.datetime)).fromNow()
    }
  }

  async componentDidMount() {
    let { details, datetime } = this.props;
    let src = await getCompanionPortraitSrc(details.companion.content_ID)
    this.timerId = setInterval(() => {
      this.setState({
        timeFromNow: moment(new Date(datetime)).fromNow()
      })
      }, 60000);

    this.setState({
      src
    })
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
    let { placement, units, traits } = this.props.details;
    return (
      <tr>
        <TD>
          {this.toCardinal(placement)}
          <span>{this.state.timeFromNow}</span>
          <span>{this.getMinutesAndSeconds()}</span>
          <span>{galaxies[this.props.galaxy]}</span>
        </TD>
        <TD>
          { this.state.src ?
          <CompanionImg src={this.state.src}/> :
          'loading' }
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
            <BG
              key={i} 
              num={t.num_units}
              rank={t.style}
            >
              <img src= {require(`../../assets/set3/traits/${t.name.replace('Set3_', '').toLowerCase()}.png`)}/>
            </BG> : null
          )} 
        </TD>
      </tr>
    )
  }
}

export default Match;