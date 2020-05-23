import React from 'react';
import { Table } from '../../../components/Table';
import { TH } from '../../../components/TH';
import Match from '../Match'

export const MatchHistory = (props)=> {

  return (
    <Table>
      <thead>
        <tr>
          <TH colSpan="4">
            <span>Recent Games</span>
          </TH>
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