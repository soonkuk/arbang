import React from 'react';
import { Box } from 'grommet';
import GameList from '../components/GameList';
import SwipeBanner from '../components/SwipeBanner';

const Landing = props => (
  <Box flex pad="medium" overflow="auto">
    <Box flex={false}>
      <SwipeBanner />
      <Box pad={{ top: 'medium' }} gap="small">
        <GameList />
      </Box>
    </Box>
  </Box>
);

export default Landing;
