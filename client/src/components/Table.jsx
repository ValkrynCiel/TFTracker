import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
  border-collapse: collapse;
  tbody tr:nth-child(odd) {
    background-color: rgb(37,50,76);
  };
  tbody tr {
    border: solid 3px rgb(37,50,76);
  }

`