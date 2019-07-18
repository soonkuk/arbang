import React from 'react';
import { Box, Menu, Heading } from 'grommet';
import * as Icons from 'grommet-icons';
import { withRouter } from 'react-router-dom';
import RouteGotoComponentBase from './RouteGotoComponentBase';

class Header extends RouteGotoComponentBase {
  render() {
    return (
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
            { label: 'Home', onClick: () => { this.goto('/'); } },
            { label: 'Log In', onClick: () => { this.goto('/login'); } },
            { label: 'Ranking', onClick: () => { this.goto('/ranking'); } },
            { label: 'BOS In/Out', onClick: () => { this.goto('/bos-in'); } },
          ]}
          icon={<Icons.Menu color="white" />}
        />
        <Heading level={3} margin="none">
          <strong>BOS Games</strong>
        </Heading>
      </Box>
    );
  }
}

export default withRouter(Header);
