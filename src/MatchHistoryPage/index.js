import React, { Component } from 'react';
import axios from 'axios';
import { MatchHistory } from './MatchHistory';
import { Banner } from '../components/Banner';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    let resp = await axios.get('http://localhost:3001/summoners/search-by-name', 
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
            <img src={`https://cdn.communitydragon.org/latest/profile-icon/${summoner.profile.profileIconId}`} style={{display: 'inline-block', height: '100px', width: '100px'}} />
            <h1 style={{display: 'inline-block', margin: '0 0 0 30px', color: 'white'}}>{summoner.profile.name}</h1>
          </>}
        </Banner>
        {isLoading ? <h1>Loading</h1> : 
        <MatchHistory matchHistory={summoner.matchHistory} />}
      </>
    )
  }
}