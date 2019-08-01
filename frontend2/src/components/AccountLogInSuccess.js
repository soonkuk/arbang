import React, { Component } from 'react';
import { Box, Text, Heading} from 'grommet';
import PropTypes from 'prop-types';

class AccountLogInSuccess extends Component {
  render() {
    const { name, balance } = this.props;
    return (
      <Box align="center">
        <Heading>Log In!</Heading>
        <Heading> Account : {name} / Balance : {balance} </Heading>
      </Box>
    )
  }
};

export default AccountLogInSuccess;

AccountLogInSuccess.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired
}