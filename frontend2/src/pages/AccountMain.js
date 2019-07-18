import React, { Component } from 'react';
import { Box } from 'grommet';
import AccountLogIn from '../components/AccountLogIn';
import AccountSignUp from '../components/AccountSignUp';
import AccountLogInSignUp from '../components/AccountLogInSignUp';
import AccountLogInSuccess from '../components/AccountLogInSuccess';

/* eslint-disable */
class AccountMain extends Component {
  state = {
    logInSuccess: false,
    accountName: '',
    accountBalance: 0
  }

  changeLogInStatus = (data) => {
    this.setState({
      logInSuccess: data.auth,
      accountName: data.name,
      accountBalance: data.balance
    })
  } 

  render() {
    if (this.state.logInSuccess == true) {
      return (
        <Box flex={true}>
          <AccountLogInSuccess name={this.state.accountName} balance={this.state.accountBalance}/>
        </Box>
      )
    } else {
      return (
        <Box flex={true}>
          <AccountLogIn action={this.changeLogInStatus.bind(this)}/>
        </Box>
      )      
    }
  }
}

export default AccountMain;
