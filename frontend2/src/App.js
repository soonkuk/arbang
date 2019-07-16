import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import { grommet as grommetTheme } from 'grommet/themes';
import Header from './components/Header';
import Landing from './pages/Landing';
import Game from './pages/Game';
import RankingMain from './pages/RankingMain';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Grommet theme={grommetTheme} full>
      <Box fill overflow="auto">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/ranking" component={RankingMain} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/game/:gameId" component={Game} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </Grommet>
  </BrowserRouter>
);

export default App;
