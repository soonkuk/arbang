import React, { Component } from 'react';
import { Box } from 'grommet';
import AccountLogin from '../components/AccountLogIn';
import AccountSignUp from '../components/AccountSignUp';
import AccountLogInSignUp from '../components/AccountLogInSignUp';

/* eslint-disable */
class AccountMain extends Component {

  render() {
    return (
      <Box flex={true}>
        <AccountLogInSignUp />
        <AccountLogin />
        <AccountSignUp />
      </Box>
    )
  }
}

export default AccountMain;
