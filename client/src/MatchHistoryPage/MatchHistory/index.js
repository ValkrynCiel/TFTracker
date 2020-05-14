import React, { Component } from 'react';
import styled from 'styled-components';
import Match from '../Match'

const Table = styled.table`
  margin: auto;
  border-collapse: collapse;
  tr {
    display: table-row;
  }
  tr:nth-child(odd) {
    background-color: #f6f6f6;
  }
`
class MatchHistory extends Component {

  render() {
    return (
      <Table>
        <thead>
          <th colSpan="3">
            <span>Recent Games</span>
          </th>
        </thead>
        <tbody>
          {this.props.matchHistory.map(({ matchId, match }) => <Match key={matchId} info={match}/>)}
          <tr>
            <img src={require('../../assets/set3/traits/blademaster.png')} />
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default MatchHistory;