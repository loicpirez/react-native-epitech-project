import React from 'react';
import { TextInput, Text } from 'react-native';
import Button from '../../../../components/button';
import HeaderContainer from './components/header-container';

const TestHeader = () => (
  <HeaderContainer>
    <TextInput
      placeholder="Enter a destination"
      style={{
        flex: 1, paddingLeft: 10, borderBottomWidth: 2, marginRight: 15,
      }}
    />
    <Button>
      <Text>Add</Text>
    </Button>
  </HeaderContainer>
);

export default TestHeader;
