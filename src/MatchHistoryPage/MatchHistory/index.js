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
          <th colSpan="4">
            <span>Recent Games</span>
          </th>
        </thead>
        <tbody>
          {this.props.matchHistory.map(({ 
            id, 
            details, 
            datetime, 
            duration,
            galaxy }) => <Match 
          key={id} 
          details = {details}
          datetime = {datetime}
          duration = {duration}
          galaxy = {galaxy}
          />)}
        </tbody>
      </Table>
    )
  }
}

export default MatchHistory;