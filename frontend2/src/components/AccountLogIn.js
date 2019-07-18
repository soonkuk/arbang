import React, { Component } from 'react';
import {
  Box, Heading, Button,
} from 'grommet';
import { BosTextInput } from './Components';
import axios from 'axios';

/* eslint-disable */
class AccountLogin extends Component {

  state = {
    ID: '',
    Password: '',
  }

  handleID = (e) => {
    this.setState({
      ID: e.target.value
    })
    console.log(this.state.ID);
  }

  handlePassword = (e) => {
    this.setState({
      Password: e.target.value
    })
    console.log(this.state.Password);
  }

  logIn = () => {
    axios.post('http://127.0.0.1:3000/api/signin', {uid:this.state.ID, password:this.state.Password})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Box flex>
        <Box
          align="center"
          background="dark-2"
          direction="row-responsive"
          justify="center"
          gap="medium"
          pad="xlarge"
        >
          <Box
            flex={false}
            align="center"
            pad="medium"
            align="center"
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
                  {' '}
                  <BosTextInput id="Id" text={this.state.ID} action={this.handleID.bind(this)}/>
                </div>
                <div>
                  PASSWORD :
                  {' '}
                  <BosTextInput id="Password" text={this.state.Password} action={this.handlePassword.bind(this)}/>
                </div>
                <div align="center">
                  <Button label="Login" primary onClick={this.logIn} />
                </div>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AccountLogin;
