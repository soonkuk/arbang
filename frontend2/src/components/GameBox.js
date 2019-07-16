import React, { Component } from 'react';
import {
  Box, Text, Image, Anchor,
} from 'grommet';
import * as Icons from 'grommet-icons';
import Genre from './Genre';
import Popularity from './Popularity';
import Game from '../pages/game';
// import Title from './Title';


// class GameBox extends Component {
//   render(){
const GameBox = props => (
  <Box
    pad=""
    align="center"
    background={{ color: 'light-2', opacity: 'strong' }}
    gap="small"
    round
    border
  >
    <Box>
      <Image src={props.item.imageUri} />
      <Anchor align="center">{props.item.title}</Anchor>
      <Genre genre={props.item.genre} />
      <Popularity popularity={props.item.popularity} />
    </Box>
  </Box>
);
export default GameBox;
