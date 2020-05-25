import styled, {keyframes, css} from 'styled-components';
import { Link } from 'react-router-dom';

const floatRight = keyframes`
  0% {
    
  }
  100% {
    transform: translateX(10px);
  }
`

const animation = css`
  animation: .5s ${floatRight} ease-out forwards`


export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  &:hover {
    color: white;
  }
  &:hover * {
    ${props => props.left ? animation : ''}
  }
  &:hover img {
    filter: brightness(1.3);
  }
`