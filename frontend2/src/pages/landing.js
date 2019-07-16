import React from 'react';
import {
  Box, Text, Anchor, Button, Distribution,
} from 'grommet';
import * as Icons from 'grommet-icons';
import GameList from '../components/GameList';

const SimpleDistribution = () => (
  <Distribution
    fill
    values={[
      { value: 50, color: 'light-3' },
      { value: 30, color: 'neutral-1' },
      { value: 20, color: 'brand' },
      { value: 10, color: 'light-3' },
      { value: 5, color: 'neutral-1' },
    ]}
  >
    {value => (
      <Box pad="xsmall" background={value.color} fill>
        <Text size="large">{value.value}</Text>
      </Box>
    )}
  </Distribution>
);


const Landing = props => (
  <Box flex pad="medium" overflow="auto">
    <Box flex={false}>
      <SimpleDistribution />
      <Box pad={{ top: 'medium' }} gap="small">
        <GameList />
      </Box>
    </Box>
  </Box>
);

export default Landing;
