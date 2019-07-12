import React from 'react';
import {Box, Text } from 'grommet';
import Genre from './genre';

const GameBox = (gameId, title, genre,imageUri, popularity) => (
      <Box
        pad="large"
        align="center"
        background={{ color: "light-2", opacity: "strong" }}
        round
        gap="small"
      >
        <Box height="small" width="small" border>
            <Image src={`${imageUri}`} fit="contain" />
        </Box>
        <Text>{title}</Text>
        <Genre genre={`${genre}`}/>
      </Box>
);

export default GameBox;