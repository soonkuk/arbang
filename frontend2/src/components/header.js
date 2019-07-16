import React from 'react';
import { Box, Menu, Heading } from 'grommet';
import * as Icons from 'grommet-icons';

const Header = () => (
  <Box
    tag="header"
    background="brand"
    pad="small"
    elevation="small"
    justify="between"
    direction="row"
    align="center"
    flex={false}
  >
    <Menu
      dropAlign={{ top: 'top', right: 'right' }}
      items={[
        { label: 'LogIn', href: '/login' },
        { label: 'Ranking', href: '/ranking' },
        { label: 'Cash In/Out', href: '/cash_out' },
      ]}
      icon={<Icons.Menu color="white" />}
    />
    <Heading level={3} margin="none">
      <strong>BOS Games</strong>
    </Heading>
  </Box>
);

export default Header;
