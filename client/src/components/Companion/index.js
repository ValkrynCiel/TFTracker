import React, {Component} from 'react';
import styled from 'styled-components';
import {getCompanionPortraitSrc} from './helper';

const Img = styled.img`
  height: 50px;
  width: 50px;
  display: block;
`
const Level = styled.div`
  position: absolute;
  bottom: 0;
  right 0;
  transform: translate(50%, 50%);
  background-color: #3d3b36;
  color: #d6b24d;
  font-size: 13px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  text-align: center;
  border: 2px solid #d6b24d;
  display: flex;
  p {
    margin: auto;
    display: block;
  }
`

const Avatar = styled.div`
  height: 50px;
  width: 50px;
  position: relative;
  border: #3d3b36 solid 2px;
  border-radius: 50%;
`


export default class Companion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src: null
    }
  }

  async componentDidMount() {
    debugger
    let src = await getCompanionPortraitSrc(this.props.species, this.props.skinId);
    this.setState({
      src
    });
  }
  
  render() {
      return (
        this.state.src ? 
        <Avatar>
          <Img src = {this.state.src}/>
          <Level><p>{this.props.level}</p></Level>
        </Avatar> : null
      )
  }
}