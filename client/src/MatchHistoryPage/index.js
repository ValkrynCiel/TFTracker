import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MatchHistory from './MatchHistory';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    let resp = await axios.get('http://localhost:3001/summoners/search-by-name', {params: {name: 'vaikryn'}});

    this.setState({
      summoner: resp.data.summoner,
      isLoading: false
    })
  }

  render() {
    let {isLoading, summoner} = this.state;
    return(
      isLoading ? <h1>Loading</h1> :
      <>
      <h1>{summoner.name}</h1>
      <img src={`https://cdn.communitydragon.org/latest/profile-icon/${summoner.profileIconId}`} style={{display: 'inline-block'}} />
      <MatchHistory matchHistory={summoner.matchHistory} />
      </>
    )
  }
}