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
    let resp = await axios.get('http://localhost:3001/summoners/search-by-name', {params: {name: this.props.match.params.name}});

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
      <div style= {{textAlign: 'left', margin: 'auto', maxWidth: '700px'}}>
        <img src={`https://cdn.communitydragon.org/latest/profile-icon/${summoner.profileIconId}`} style={{display: 'inline-block', height: '100px', width: '100px'}} />
        <h1 style={{display: 'inline-block', margin: '0 0 0 30px'}}>{summoner.name}</h1>
      </div>
      <MatchHistory matchHistory={summoner.matchHistory} />
      </>
    )
  }
}