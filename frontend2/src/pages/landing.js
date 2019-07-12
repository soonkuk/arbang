import React from 'react';
import {Box, Text, Anchor, Button, Distribution} from 'grommet';
import * as Icons from 'grommet-icons';

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
    {/* <GameBox gameId="gameId" title="My Game" genre="arcade" imageUri="/" popularity="1" /> */}
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

const Landing = () => (
  <Box flex={true} pad='medium' overflow='auto'>
    <Box flex={false}>
      <Box pad={{ top: 'medium' }} gap='small'>
        <SimpleDistribution/>
        <SimpleBox/>
      </Box>
    </Box>
  </Box>
);

export default Landing;