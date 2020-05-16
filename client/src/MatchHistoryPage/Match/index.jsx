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
  background-position: ${props => `calc(${100/5*(props.rank+1)}% - 1px) 0;`} 
  display: inline-flex;
  margin: 2px;
  img {
    margin: auto;
    display: block;
    width: 32px;
    height: 32px;
  }
`


//2: bronze
//3: silver
//4: gold
//5: chromatic

const TD = styled.td`
  padding: 15px;
  &.units {
    width: 350px;
    text-align: left;
  }
  &.traits {
    width: 150px;
    text-align: center;
  }
  span {
    display: block;
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
      timerId: null,
      timeFromNow: null
    }
  }

  async componentDidMount() {
    let { details, datetime } = this.props;
    let src = await getCompanionPortraitSrc(details.companion.content_ID)
    let timerId = setInterval(() => {
      this.setState({
        timeFromNow: moment(new Date(datetime)).fromNow()
      })
      }, 60000);

    this.setState({
      src,
      timerId,
      timeFromNow: moment(new Date(datetime)).fromNow()
    })
  }

  toCardinal(num) {
    const Rank = styled.h2`
      color: ${props => {
        if (props.num === 1) return 'green';
        if (props.num < 5) return 'blue';
        return 'gray'
      }}
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

    return `${dur.minutes()}m${dur.seconds()}s`
  } 

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    let { placement, units, traits } = this.props.details;
    return (
      <tr>
        <TD>
          {this.toCardinal(placement)}
        </TD>
        <TD>
          { this.state.src ?
          <CompanionImg src={this.state.src}/> :
          'default' }
          <span>{this.state.timeFromNow}</span>
          <span>{this.getMinutesAndSeconds()}</span>
          <span>{galaxies[this.props.galaxy]}</span>
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