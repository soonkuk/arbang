import React, { Component } from 'react';
import {
  Box,
  Button,
  Text,
} from 'grommet';

/* eslint-disable */
class AccountLogInSignUp extends Component {
  render() {
    return (
      <Box
      flex={true}
      >
        <Box align='center'>
            <p />
            <Text>Login is required.</Text>
            <Box direction="row" align="center" gap="small" pad="medium">
              <Button primary label="Log in" onClick={() => {}} />
              <Button label="Sign up" href="#" />
            </Box>
        </Box>
      </Box>
    );
  }
}

export default AccountLogInSignUp;
