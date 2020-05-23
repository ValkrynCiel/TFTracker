import React, { Component } from 'react';
import axios from 'axios';
import { Load } from '../components/Load';
import { Banner } from '../components/Banner';
import { MatchDetails } from './MatchDetails';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

export default class MatchHistoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: null,
      isLoading: true
    }
  }

  async componentDidMount() {
    let resp = await axios.get(`${BASE_URL}/match/details`, 
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
      <>
        <Banner>
          {isLoading ? null :
            <div style= {{textAlign: 'left', margin: 'auto', maxWidth: '700px'}}>
              <h1 style={{display: 'inline-block', margin: '0 0 0 30px'}}>{match.details.galaxy}</h1>
            </div>}
        </Banner>
        {isLoading ? <Load /> :
        <MatchDetails participants={match.details.participants} />}
      </>
    )
  }
}