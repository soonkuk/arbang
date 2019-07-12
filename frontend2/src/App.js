import React from 'react';
import {Grommet, Box, Button, Menu, Heading, FormField, TextInput, Select, Anchor, Text, Image, Distribution} from 'grommet';
import { grommet as grommetTheme, dark as darkTheme, aruba as arubaTheme } from "grommet/themes";

import Header from './components/header';
import Footer from './components/footer';
import Landing from './pages/landing';

const App = () => (
  <Grommet theme={arubaTheme} full={true}>
    <Box fill={true}>
      <Header />
      <Landing />
      <Footer />
    </Box>
  </Grommet>
);

export default App;
