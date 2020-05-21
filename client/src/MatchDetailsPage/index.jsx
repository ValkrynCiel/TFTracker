import React, { Component } from 'react';
import axios from 'axios';
import { MatchDetails } from './MatchDetails';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    let resp = await axios.get('http://localhost:3001/match/details', 
    {
      params: { id: this.props.match.params.id }
    });

    this.setState({
      match: resp.data.match,
      isLoading: false
    });
  }

  render() {
    let {isLoading, match} = this.state;
    return(
      isLoading ? <h1>Loading</h1> :
      <>
      <div style= {{textAlign: 'left', margin: 'auto', maxWidth: '700px'}}>
        <h1 style={{display: 'inline-block', margin: '0 0 0 30px'}}>{match.details.galaxy}</h1>
      </div>
      <MatchDetails participants={match.details.participants} />
      </>
    )
  }
}