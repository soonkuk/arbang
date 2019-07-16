import React from 'react';
import { Heading, Box, Text } from 'grommet';

// eslint-disable-next-line react/prop-types
const Game = ({ match }) => (
  <Box>
    <Heading>
      Game Page
    </Heading>
    <Text>
      { match.params.gameId }
    </Text>
  </Box>
);

export default Game;
