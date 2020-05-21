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
          details: { 
            datetime, 
            duration, 
            galaxy, 
            participants
          }  
        }) => <Match
            id={id}
            key={id} 
            details={participants[0]}
            datetime={datetime}
            duration={duration}
            galaxy={galaxy}
          />
        )}
      </tbody>
    </Table>
  )
}