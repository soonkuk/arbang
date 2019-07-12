import React from 'react';
import {Box, Menu, Heading } from 'grommet';
import * as Icons from 'grommet-icons';
const Header = () => (
  <Box
    tag='header'
    background='brand'
    pad='small'
    elevation='small'
    justify='between'
    direction='row'
    align='center'
    flex={false}
  >
    <Heading level={3} margin='none'>
      <strong>BOS Games</strong>
    </Heading>
    <Menu
      dropAlign={{ top: 'top', right: 'right' }}
      items={[{ label: 'Logout', href: '#' }]}
      icon={<Icons.Menu color='white' />}
    />
  </Box>
);

export default Header;