import React, { Component } from 'react';
import styled from 'styled-components';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    let summoner = await axios.get(`${API_URL}${username}`, CONFIG);
    debugger
  }

  render() {
    return(
      this.isLoading ? <h1>Loading</h1> :
      <div></div>
    )
  }
}