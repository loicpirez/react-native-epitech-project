import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Container from '../container';
import {Input, Button} from 'react-native-elements';

const LoginModule = ({buttonTitle, onPress}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container style={{width: '100%'}}>
      <Input
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder="Mot de passe"
        secureTextEntry
      />
      <Button
        title={buttonTitle}
        containerStyle={{marginTop: 20, marginBottom: 5}}
        onPress={() => onPress({email, password})}
      />
    </Container>
  );
};

LoginModule.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default LoginModule;
