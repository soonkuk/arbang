import React from 'react';
import {
  Grid, Image, Box, Text, InfiniteScroll,
} from 'grommet';
import GameBox from './GameBox';


const allItems = [
  {
    gameId: '1', title: 'myGame1', genre: 'Sports', imageUri: 'https://via.placeholder.com/140x100.jpg?text=Game+Thumb', gameUri: '/game/1', popularity: 5,
  },
  {
    gameId: '2', title: 'myGame1', genre: 'Adventure', imageUri: 'https://via.placeholder.com/140x100', gameUri: '/game/2', popularity: 2,
  },
  {
    gameId: '3', title: 'myGame3', genre: 'Arcade', imageUri: 'https://via.placeholder.com/140x100', gameUri: '/game/3', popularity: 3,
  },
  {
    gameId: '4', title: 'myGame4', genre: 'MMO', imageUri: 'https://via.placeholder.com/140x100', gameUri: '/game/4', popularity: 4,
  },
  {
    gameId: '5', title: 'myGame5', genre: 'Role', imageUri: 'https://via.placeholder.com/140x100', gameUri: '/game/5', popularity: 1,
  },
];

const GameList = props => (
  <Grid columns="xsmall" rows="small">
    <InfiniteScroll items={allItems} step={12}>
      {item => (
        <GameBox key={item.gameId} as="article" pad="xsmall" item={item} />
      )}
    </InfiniteScroll>
  </Grid>
);

export default GameList;
