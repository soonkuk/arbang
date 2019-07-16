import React from 'react';
import { Box } from 'grommet';
import * as Icons from 'grommet-icons';

// eslint-disable-next-line react/prop-types
const Popularity = ({ popularity }) => (
  <Box direction="row" justify="left" align="center">
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
