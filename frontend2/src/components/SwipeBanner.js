import React from 'react';
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Carousel, Image } from 'grommet';

const SwipeBanner = () => (
  <Box align="center" border>
    <Carousel play="3000" fill>
      <Box pad="xlarge" background="accent-1">
        <Attraction size="xlarge" />
      </Box>
      <Box pad="xlarge" background="accent-2">
        <TreeOption size="xlarge" />
      </Box>
      <Box pad="xlarge" background="accent-3">
        <Car size="xlarge" />
      </Box>
    </Carousel>
  </Box>
);

export default SwipeBanner;
