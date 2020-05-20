import styled from 'styled-components';

export const Table = styled.table`
  margin: auto;
  border-collapse: collapse;
  tr {
    display: table-row;
  }
  tr:nth-child(odd) {
    background-color: #f6f6f6;
  }
`