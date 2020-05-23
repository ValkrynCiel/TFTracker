import React from 'react';
import { Table } from '../../../components/Table';
import { TH } from '../../../components/TH';
import Participant from '../Participant';

export const MatchDetails = (props)=> {

  return (
    <Table>
      <thead>
        <tr>
          <TH>Summoner</TH>
          <TH>Last<br/>Round</TH>
          <TH>Level</TH>
          <TH>Units</TH>
          <TH>Traits</TH>
          <TH>Gold<br/>Remaining</TH>
        </tr>
      </thead>
      <tbody>
        {props.participants.map(({puuid, ...rest}) => <Participant
            key={puuid}
            {...rest}
          />
        )}
      </tbody>
    </Table>
  )
}