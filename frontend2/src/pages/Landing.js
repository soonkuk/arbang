import React from 'react';
import { Box } from 'grommet';
import GameList from '../components/GameList';
import SwipeBanner from '../components/SwipeBanner';

const Landing = props => (
  <Box flex overflow="auto">
    <SwipeBanner />
    <Box pad={{ top: 'medium' }} gap="small">
      <GameList />
    </Box>
  </Box>
);

export default Landing;
