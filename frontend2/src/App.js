import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grommet, Box } from 'grommet';
import { grommet as grommetTheme } from 'grommet/themes';
import Header from './components/Header';
// import Footer from './components/footer';
import Landing from './pages/Landing';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <Grommet theme={grommetTheme} full>
      <Box fill overflow="auto">
        <Header />
        <Switch>
          {/* <Landing /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/game/:gameId" component={Game} />
          <Route component={NotFound} />
          {/* <Footer /> */}
        </Switch>
      </Box>
    </Grommet>
  </BrowserRouter>
);

export default App;
