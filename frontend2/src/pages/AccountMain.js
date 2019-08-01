import React, { Component } from 'react';
import { Box } from 'grommet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter, Route, withRouter,
} from 'react-router-dom';
import AccountLogInSignUp from '../components/AccountLogInSignUp';
import AccountLogInSuccess from '../components/AccountLogInSuccess';
import AccountLogIn from '../components/AccountLogIn';
import AccountSignUp from '../components/AccountSignUp2';

/* eslint-disable */
class AccountMain extends Component {

  render() {
    return (
      <BrowserRouter>
        <Box flex={true}>
          <AccountLogInSignUp />
          <Route exact path="/signUp" component={AccountSignUp} />
          <Route exact path="/logIn" component={AccountLogIn} />
        </Box>
      </BrowserRouter>
    )
  }
}

const { bool, number } = PropTypes;

AccountMain.propTypes = {
  authenticated: bool.isRequired,
  balance: number.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.session.authenticated,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(AccountMain);
