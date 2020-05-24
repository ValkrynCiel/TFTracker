import React, { Component } from 'react';
import axios from 'axios';
import { Load } from '../../components/Load';
import { MatchHistory } from './MatchHistory';
import { RankedDetails } from './RankedDetails';
import { Banner } from '../../components/Banner';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    console.log(`${BASE_URL}/summoners/search-by-name`)
    let resp = await axios.get(`${BASE_URL}/summoners/search-by-name`, 
    {
      params: { name: this.props.match.params.name }
    });
    
    this.setState({
      summoner: resp.data.summoner,
      isLoading: false
    });
  }

  render() {
    let {isLoading, summoner} = this.state;
    return(
      <>
        <Banner>
          {isLoading ? null :
          <>
            <img src={`https://cdn.communitydragon.org/latest/profile-icon/${summoner.profile.profileIconId}`} style={{display: 'inline-block', height: '75px', width: '75px', borderRadius: '20%', marginLeft: '100px'}} />
            <div style={{color: 'white', marginLeft: '20px',textAlign: 'left', textShadow: '0px 0px 6px black'}}>
            <span style={{fontSize: '35px',}}>{summoner.profile.name}</span><br/>
            <span>Level {summoner.profile.summonerLevel}</span>
            </div>
          </>}
        </Banner>
        {isLoading ? <Load /> :
        <>
        <RankedDetails {...summoner.ranked} /> 
        <MatchHistory matchHistory={summoner.matchHistory} />
        </>}
      </>
    )
  }
}