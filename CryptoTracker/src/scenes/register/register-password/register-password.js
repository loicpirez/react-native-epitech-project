import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Input, Button } from 'react-native-elements';
import SceneContainer from '../../../components/scene-container';
import { goHome } from '../../../navigation/navigator/navigator';
import auth from '@react-native-firebase/auth';
import {submitRegister} from './submit-register';
import { firebase } from '@react-native-firebase/auth';
const RegisterPassword = ({ email, password }) => {
  const [confirm, setConfirm] = useState('');
  
  return (
    <SceneContainer style={{ padding: 50, justifyContent: 'space-evenly' }}>
      <Text h4 style={{ textAlign: 'center' }}>
        Veuillez confirmer votre mot de passe
      </Text>
      <Input
        value={confirm}
        onChangeText={text => setConfirm(text)}
        placeholder="Confirmation mot de passe"
        secureTextEntry
      />
      <Button
        disabled={confirm !== password}
        title="Suivant"
        containerStyle={{ marginTop: 20 }}
        onPress={() => submitRegister(email, password)}
      />
    </SceneContainer>
  );
};

RegisterPassword.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default RegisterPassword;

// replace goHome() by
// register() if 200 => goHome() else fire error + not move
