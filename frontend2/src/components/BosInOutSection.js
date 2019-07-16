import React from 'react';
import {
  Grommet,
  Box,
  Distribution,
  Text,
} from 'grommet';
import { grommet } from 'grommet/themes';

const BosInOutSection = () => (
  <Grommet theme={grommet}>
    <Distribution
      values={[
        { value: 50, color: 'light-5', name: 'Bos-In' },
        { value: 50, color: 'dark-6', name: 'Bos-Out' },
      ]}
    >
      {value => (
        <Box pad="medium" background={value.color} fill align="center">
          <Text size="large">{value.name}</Text>
        </Box>
      )}
    </Distribution>
  </Grommet>
);

export default BosInOutSection;
