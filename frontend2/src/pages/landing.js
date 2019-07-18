import React from 'react';
import { Box } from 'grommet';
import GameList from '../components/GameList';
import SwipeBanner from '../components/SwipeBanner';
import DummyGameData from './DummyGameData';

const Landing = props => (
  <Box flex overflow="auto">
    <SwipeBanner />
    <Box pad={{ top: 'medium' }} gap="small">
      <GameList items={Object.values(DummyGameData)} />
    </Box>
  </Box>
);

export default Landing;
