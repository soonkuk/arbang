import React from 'react';
import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import { grommet as grommetTheme } from 'grommet/themes';
import Header from './components/Header';
import Landing from './pages/Landing';
import GameDetail from './pages/GameDetail';
import RankingMain from './pages/RankingMain';
import AccountMain from './pages/AccountMain';
import BosInOutMain from './pages/BosInOutMain';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Grommet theme={grommetTheme} full>
      <Box fill overflow="auto">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={AccountMain} />
          <Route exact path="/ranking" component={RankingMain} />
          <Route exact path="/bos-in" component={BosInOutMain} />
          {/* <Route path="/game" component={GameDetail} /> */}
          <Route path="/game/:gameId" component={GameDetail} />
          <Route component={NotFound} />
        </Switch>
      </Box>
    </Grommet>
  </BrowserRouter>
);

export default App;
