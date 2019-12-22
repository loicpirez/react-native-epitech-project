import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {Text, Input, Button} from 'react-native-elements';
import SceneContainer from '../../../components/scene-container';
import LoginModule from '../../../components/login-module';
import Container from '../../../components/container';

const RegisterMail = ({componentId}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SceneContainer style={{padding: 50, justifyContent: 'space-evenly'}}>
      <Text h4 style={{textAlign: 'center'}}>
        Veuillez saisir vos identifiants de connexion
      </Text>
      <LoginModule
        buttonTitle="Suivant"
        onPress={data =>
          Navigation.push(componentId, {
            component: {
              id: 'RegisterPassword',
              name: 'RegisterPassword',
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: 'Inscription',
                    alignment: 'center',
                  },
                },
              },
              passProps: {...data},
            },
          })
        }
      />
    </SceneContainer>
  );
};

RegisterMail.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default RegisterMail;
