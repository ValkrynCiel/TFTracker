import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ChampionThumbnail } from '../../components/ChampionThumbnail';
import { TD } from '../../components/TD';
import { Trait } from '../../components/Trait';
import { Companion } from '../../components/Companion';
import { getCompanionPortraitSrc } from '../../helper';
import { galaxies } from './galaxyInfo';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: blue;
  }
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
          <StyledLink to={`/match/na/${this.props.id}`}>
            {this.toCardinal(placement)}
            <span>{this.state.timeFromNow}</span>
            <span>{this.getMinutesAndSeconds()}</span>
            <span>{galaxies[this.props.galaxy]}</span>
          </StyledLink>
        </TD>
        <TD>
          { this.state.src ?
          <Companion src={this.state.src}/> :
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

export default Match;