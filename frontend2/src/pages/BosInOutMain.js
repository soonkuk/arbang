import React from 'react';
import { Box } from 'grommet';
import BosInOutSection from '../components/BosInOutSection';
import BosIn from '../components/BosIn';
import BosOut from '../components/BosOut';

const BosInOutMain = () => (
  <Box flex="true">
    <BosInOutSection />
    <BosIn />
    <BosOut />
  </Box>
);

export default BosInOutMain;
