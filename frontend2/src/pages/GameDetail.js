import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Heading, Box, Text, Paragraph, Image, Button,
} from 'grommet';
import { Login, Gamepad } from 'grommet-icons';
import RouteGotoComponentBase from '../components/RouteGotoComponentBase';
import Popularity from '../components/Popularity';
import Genre from '../components/Genre';

const game = {
  id: '1',
  title: 'Darts Pro',
  genre: 'Sports',
  desc: 'Darts Pro is a HTML5 Skill Game.\
  Test your aim with this professional version of the Darts Game.\
  The game follows the official rules of the Darts Regulation Authority.\
  Three Games Mode:\
  Play Solo\
  Challenge the CPU\
  Challenge a Friend from the same device\
  The game is usable both in Portrait and Landscape Mode, try it now!!',
  imageUri: 'https://via.placeholder.com/300x200.png/000000/FFFFFF/?text=Game+Detail',
  thumbUri: '/games/darts/thumb.jpg',
  gameUri: '/games/darts/index.html',
  popularity: 5,
};
class GameDetail extends RouteGotoComponentBase {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  render() {
    const { location, history, match } = this.props;
    return (
      <Box fill alignSelf="center">
        <Heading alignSelf="center">
          {game.title}
        </Heading>
        <Box>
          <Image src={game.imageUri} />
        </Box>
        <Popularity popularity={game.popularity} />
        <Genre genre={game.genre} />
        <Paragraph alignSelf="center" size="medium">
          {game.desc}
        </Paragraph>
        <Box direction="row" alignSelf="center">
          <Button
            active
            icon={<Login />}
            label="Log In"
            onClick={() => this.goto('/login')}
            margin="small"
          />
          <Button
            icon={<Gamepad />}
            label="Play Solo"
            onClick={() => this.goto('/game')}
            margin="small"
          />
        </Box>
        {/* <Text>
          { match.params }
        </Text>
        <Text>
          { location }
        </Text> */}
        <Text>
          { match.params.gameId }
        </Text>
      </Box>
    );
  }
}

export default withRouter(GameDetail);
