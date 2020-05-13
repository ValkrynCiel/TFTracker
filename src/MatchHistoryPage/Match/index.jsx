import React, {Component} from 'react';
import styled from 'styled-components';
import ChampionThumbnail from '../ChampionThumbnail';

class Match extends Component {
  render() {
    return (
      <>
      {this.props.info.units.map((u, i)=> 
          <ChampionThumbnail
            key={i} 
            id={u.character_id}
            rarity={u.rarity}
            tier={u.tier}
            items={u.items}
          />
      )} 
      
      <p>{JSON.stringify(this.props.info)}</p>
      </>
    )
  }
}

export default Match;