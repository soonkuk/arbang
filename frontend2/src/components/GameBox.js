import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Image, Anchor,
} from 'grommet';
import Genre from './Genre';
import Popularity from './Popularity';


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
      {/* <Anchor align="center" href={`/game/${props.item.gameId}`}>{props.item.title}</Anchor> */}
      <Link to={`/game/${props.item.gameId}`}>{props.item.title}</Link>
      <Genre genre={props.item.genre} />
      <Popularity popularity={props.item.popularity} />
    </Box>
  </Box>
);
export default GameBox;
