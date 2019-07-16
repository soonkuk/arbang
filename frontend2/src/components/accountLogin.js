import React, { Component } from "react";
import { Box, Heading, TextInput, Button } from "grommet";

class SimpleTextInput extends Component {

  state = {
    name:""
  }

  ref = React.createRef();

  onChange = event => this.setState({ value: event.target.value });

  render() {
    const { value } = this.state;
    return (
          <Box width="small" >
            <TextInput ref={this.ref} value={value} onChange={this.onChange} />
          </Box>
    );
  }
}

class AccountLogin extends Component {

  render() {
    return (
      <Box
      flex={true}
      >
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
            align = 'center' 
            pad="medium"
            align="center"
            background={{ color: "#FFFFFF", opacity: "strong" }}
            round="xsmall"
            gap="small" 
            overflow='auto'
          >
            <Heading level={3} margin='none'>
              <strong>Log in</strong>
            </Heading>
            <Box 
              pad={{ top: 'medium' }} 
              gap='small'
            >
              <div>
                ID : <SimpleTextInput />
              </div>
              <div>
                PASSWORD : <SimpleTextInput id='Password' />
              </div>
              <div  align='center'>
                <Button 
                  label='Login' 
                  primary={true} 
                  onClick={() => {}} 
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default AccountLogin;