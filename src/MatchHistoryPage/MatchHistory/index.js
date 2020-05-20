import React from 'react';
import { Table } from '../../components/Table';
import Match from '../Match'

export const MatchHistory = (props)=> {

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan="4">
            <span>Recent Games</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.matchHistory.map(({ 
          id, 
          details, 
          datetime, 
          duration,
          galaxy }) => <Match
            id={id}
            key={id} 
            details={details}
            datetime={datetime}
            duration={duration}
            galaxy={galaxy}
          />
        )}
      </tbody>
    </Table>
  )
}

export default MatchHistory;