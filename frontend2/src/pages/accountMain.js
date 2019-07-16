import React, { Component }  from 'react';
import { Box, Text } from 'grommet';
import AccountLogin from '../components/accountLogin';
import AccountSignUp from '../components/accountSignUp';
import AccountLogInSignUp from '../components/accountLogInSignUp';

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