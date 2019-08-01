import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Text,
} from 'grommet';


/* eslint-disable */
class AccountLogInSignUp extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (path) => {
    console.log("handleOnClick", path);
    this.props.history.push(path);
  }

  render() {
    return (
      <Box>
        <Box align="center">
          <p />
          <Text>Login is required.</Text>
          <Box direction="row" align="center" gap="small" pad="medium">
            <Button primary label="Log in" onClick = { () => this.handleOnClick('/logIn') } />
            <Button label="Sign up" onClick = { () => this.handleOnClick('/signUp') } />
          </Box>
        </Box>
      </Box>
    );
  }
}

const { bool, number } = PropTypes;

AccountLogInSignUp.propTypes = {
  authenticated: bool.isRequired,
  balance: number.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.session.authenticated,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(withRouter(AccountLogInSignUp));
