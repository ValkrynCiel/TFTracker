import React, { Component } from 'react';
import styled from 'styled-components';

const API_URL = `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/`
const CONFIG = {
  headers: {
    "X-Riot-Token": "RGAPI-4f8db37e-0edb-494a-8392-67acc74d00ea",
  }
}

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    let username = 'vaikryn';
    let summoner = await axios.get(`${API_URL}${username}`, CONFIG);
    debugger
  }

  render() {
    return(
      <div></div>
    )
  }
}