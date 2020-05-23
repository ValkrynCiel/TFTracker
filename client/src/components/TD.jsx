import styled from 'styled-components';

export const TD = styled.td`
  padding: 10px 15px;
  &.units {
    width: 300px;
    text-align: left;
  }
  &.traits {
    width: 120px;
    text-align: center;
  }
  span {
    display: block;
    text-align: left;
    font-size: 12px;
  }
`