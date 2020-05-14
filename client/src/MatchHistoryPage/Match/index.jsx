import React, {Component} from 'react';
import styled from 'styled-components';
import ChampionThumbnail from '../ChampionThumbnail';
import {getCompanionPortraitSrc} from '../../helper';
import traitImg from '../../assets/set3/traits/bg.png'

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
      src: null
    }
  }

  async componentDidMount() {
    let src = await getCompanionPortraitSrc(this.props.info.companion.content_ID)

    this.setState({
      src
    })
  }

  toCardinal(num) {
    const Span = styled.span`
      display: block
    `
    if (num === 1) return '1st';
    if (num === 2) return '2nd';
    if (num === 3) return '3rd';
    return <Span>{`${num}th`}</Span>;
  }

  render() {
    let { placement, units, traits } = this.props.info;
    return (
      <tr>
        <TD>
          { this.state.src ?
          <CompanionImg src={this.state.src}/> :
          'default' }
          {this.toCardinal(placement)}
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
        {/* <td>
          <p>{JSON.ingify(this.props.info)}</p>
        </td> */}
      </tr>
    )
  }
}

export default Match;