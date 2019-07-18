import React, { Component } from 'react';
import {
  Box, Button, Text,
} from 'grommet';

class AccountSignUp extends Component {
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
            <div align="center" direction="row">
              <Text>SNS 간편가입</Text>
              <Box direction="column" align="center" gap="small" pad="medium">
                <Box
                  justify="center"
                  align="center"
                  height="50px"
                  width="300px"
                >
                  <Button primary label="Telegram 계정으로 간편가입" fill onClick={() => {}} />
                </Box>
                <Box
                  justify="center"
                  align="center"
                  height="50px"
                  width="300px"
                >
                  <Button primary label="Google 계정으로 간편가입" fill onClick={() => {}} />
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default AccountSignUp;
