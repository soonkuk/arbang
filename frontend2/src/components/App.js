import React from 'react';
import {Grommet, Box, Button, Menu, Heading, FormField, TextInput, Select, Anchor, Text, Image, Distribution} from 'grommet';
import * as Icons from 'grommet-icons';
import { grommet as grommetTheme, dark as darkTheme, aruba as arubaTheme } from "grommet/themes";

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

const Footer = () => (
  <Box
    tag='footer'
    direction='row'
    justify='end'
    pad='medium'
    border={{ side: 'top' }}
    gap='small'
    flex={false}
  >
    <Button label='Cancel' color='border' onClick={() => {}} />
    <Button label='Add' primary={true} onClick={() => {}} />
  </Box>
);

const SimpleBox = () => (
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: "light-2", opacity: "strong" }}
        round
        gap="small"
      >
        <Icons.Attraction size="large" />
        <Text>Party</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
      <Box pad="large" align="center" background="dark-3" round gap="small">
        <Icons.Car size="large" color="light-2" />
        <Text>Travel</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Box>
);

const SimpleDistribution = () => (
    <Distribution
      fill
      values={[
        { value: 50, color: "light-3" },
        { value: 30, color: "neutral-1" },
        { value: 20, color: "brand" },
        { value: 10, color: "light-3" },
        { value: 5, color: "neutral-1" }
      ]}
    >
      {value => (
        <Box pad="xsmall" background={value.color} fill>
          <Text size="large">{value.value}</Text>
        </Box>
      )}
    </Distribution>
);

const Body = () => (
  <Box flex={true} pad='medium' overflow='auto'>
    <Box flex={false}>
      <Heading level={3} margin='none'>
        <strong>BOS Game Main Page</strong>
      </Heading>
      <Box pad={{ top: 'medium' }} gap='small'>
        <SimpleDistribution/>
        <SimpleBox/>
      </Box>
    </Box>
  </Box>
);

const App = () => (
  <Grommet theme={arubaTheme} full={true}>
    <Box fill={true}>
      <Header />
      <Body />
      <Footer />
    </Box>
  </Grommet>
);


export default App;
