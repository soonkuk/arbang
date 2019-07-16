import React from 'react';
import {
  Grommet,
  Box,
} from 'grommet';
import { aruba as arubaTheme } from 'grommet/themes';

import Header from './components/header';
import Footer from './components/footer';
import Landing from './pages/landing';

const App = () => (
  <Grommet theme={arubaTheme} full="true">
    <Box fill="true">
      <Header />
      <Landing />
      <Footer />
    </Box>
  </Grommet>
);

export default App;
