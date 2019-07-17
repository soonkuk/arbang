import React from 'react';
import {
  Heading, Box, Text, Paragraph, Image, Button,
} from 'grommet';
import { Login, Gamepad } from 'grommet-icons';
import Popularity from '../components/Popularity';

const game = {
  id: '1',
  title: 'Darts',
  genre: 'Sports',
  desc: 'Darts Pro is a HTML5 Skill Game.\
  Test your aim with this professional version of the Darts Game.\
  The game follows the official rules of the Darts Regulation Authority.\
  Three Games Mode:\
  Play Solo\
  Challenge the CPU\
  Challenge a Friend from the same device\
  The game is usable both in Portrait and Landscape Mode, try it now!!',
  imageUri: 'https://via.placeholder.com/300x200/000000/FFFFFF/?text=gameDetail',
  thumbUri: '/games/darts/thumb.jpg',
  gameUri: '/games/darts/index.html',
  popularity: 5,
};
// eslint-disable-next-line react/prop-types
const GameDetail = ({ match }) => (
  <Box fill alignSelf="center">
    <Heading alignSelf="center">
      {game.title}
    </Heading>
    <Box>
      <Image src={game.imageUri} />
    </Box>
    <Popularity popularity={game.popularity} />
    <Paragraph alignSelf="center">
      {game.desc}
    </Paragraph>
    <Box direction="row" alignSelf="center">
      <Button
        active
        icon={<Login />}
        label="Log In"
        onClick={() => {}}
        margin="small"
      />
      <Button
        icon={<Gamepad />}
        label="Single Game"
        onClick={() => {}}
        margin="small"
      />
    </Box>
    <Text>
      { match.params.gameId }
    </Text>
  </Box>
);

export default GameDetail;
