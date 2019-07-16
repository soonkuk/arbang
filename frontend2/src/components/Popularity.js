import React from 'react';
import { Box, Text } from 'grommet';
import * as Icons from 'grommet-icons';

// eslint-disable-next-line react/prop-types
const Popularity = ({ popularity }) => (
  <Box direction="col-responsive" justify="center" align="center">
    {
        Array(popularity)
          .fill()
          .map((_, i) => (
            <Icons.Star size="small" key={i}></Icons.Star>
          ))
    }
  </Box>
);
export default Popularity;
