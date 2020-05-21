import React from 'react';
import { Table } from '../../components/Table';
import Participant from '../Participant';

export const MatchDetails = (props)=> {

  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>
            <span>Rank</span>
          </th>
          <th>
            <span>Summoner</span>
          </th>
          <th>
            <span>Last Round</span>
          </th>
          <th>
            <span>Level</span>
          </th>
          <th>
            <span>Units</span>
          </th>
          <th>
            <span>Traits</span>
          </th>
          <th>
            <span>Gold Left</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.details.map(({puuid, ...rest}) => <Participant
            key={puuid}
            {...rest}
          />
        )}
      </tbody>
    </Table>
    </>
  )
}