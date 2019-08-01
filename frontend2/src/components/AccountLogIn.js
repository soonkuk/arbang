import React, { Component } from 'react';
import {
  Box, Heading, Button,
} from 'grommet';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BosTextInput } from './Components';

/* eslint-disable */
class AccountLogin extends Component {
  constructor( props ){
    super( props );
    this.state = {
      user: {
        id: '',
        password: '',
      },
    }
    this.handleId = this.handleId.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  handleId = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        id: e.target.value,
      }
    });
  }

  handlePassword = (e) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        password: e.target.value,
      }
    });
  }

  logIn = () => {
    const { user } = this.state;
    axios.post('http://127.0.0.1:3000/api/logIn', { uid: user.id, password: user.password })
    .then(function (response) {
      const { token } = response;
      console.log('Response status : ', response.status, ' Response token : ', token);
      if (response.status == 200) {
        console.log(response.data);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { user } = this.state;
    const { handleId, handlePassword, logIn } = this;

    return (
      <Box flex>
        <Box
          align="center"
          direction="row-responsive"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box
            flex={false}
            align="center"
            pad="medium"
            background={{ color: '#FFFFFF', opacity: 'strong' }}
            round="xsmall"
            gap="small"
            overflow="auto"
          >
            <form className="form-login">
              <Heading level={3} margin="none">
                <strong>Log in</strong>
              </Heading>
              <Box pad={{ top: 'medium' }} gap="small">
                <div>
                  ID :
                  {''}
                  <BosTextInput id="Id" text={user.id} action={ handleId }/>
                </div>
                <div>
                  PASSWORD :
                  {''}
                  <BosTextInput id="Password" text = { user.password } action = { handlePassword }/>
                </div>
                <div align="center">
                  <Button label="Login" primary onClick = { logIn } />
                </div>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    );
  }
}

const { object, bool, number } = PropTypes;

AccountLogin.propTypes = {
  user: object.isRequired,
  authenticated: bool.isRequired,
  balance: number.isRequired
};

const mapStateToProps = state => ({
  user: state.session.user,
  authenticated: state.session.authenticated,
  balance: state.account.balance,
});

export default connect(mapStateToProps)(AccountLogin);
