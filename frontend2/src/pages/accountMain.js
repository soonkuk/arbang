import React, { Component } from 'react';
import { Box, Text } from 'grommet';
import AccountLogin from '../components/AccountLogin';
import AccountSignUp from '../components/AccountSignUp';
import AccountLogInSignUp from '../components/AccountLogInSignUp';

class AccountMain extends Component {
  render() {
    return (
      <Box flex>
        <AccountLogInSignUp />
        <AccountLogin />
        <AccountSignUp />
      </Box>
    );
  }
}

export default AccountMain;
