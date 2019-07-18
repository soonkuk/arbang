import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Box, Image, Anchor,
} from 'grommet';
import Genre from './Genre';
import Popularity from './Popularity';
import RouteGotoComponentBase from './RouteGotoComponentBase';

class GameBox extends RouteGotoComponentBase {
  render() {
    return (
      <Box
        width="small"
        height="small"
        round="xsmall"
        align="center"
        justify="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        margin="small"
      >
        <Image src={this.props.item.thumbUri} alignSelf="stretch" margin="small" />
        <Anchor size="small" align="center" onClick={() => this.goto(`/game/${this.props.item._id}`)}>{this.props.item.title}</Anchor>
        <Genre genre={this.props.item.genre} />
        <Popularity popularity={this.props.item.popularity} />
      </Box>
    );
  }
}

export default withRouter(GameBox);
