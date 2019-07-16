
import React, { Component } from 'react';
import {
  Box,
  Heading,
  Button,
} from 'grommet';
import { BosTextInput } from './Components';
import BosInHistory from './BosInHistory';

/* eslint-disable */
class BosIn extends Component {

  render() {
    return (
      <Box
      flex={false}
      >
        <Box
          align="center"
          direction="column"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box align="center">
          <Heading level={3} margin='none'>
            <strong>Boscoin 입금</strong>
          </Heading> 
          </Box>
          <Box direction="row" gap="medium">
          <div align="center">
            <Button 
              label='입금주소 생성' 
              primary={true} 
              onClick={() => {}} 
            />
          </div><BosTextInput />
          </Box>
          <BosInHistory />
        </Box>
      </Box>
    )
  };
}

export default BosIn;
