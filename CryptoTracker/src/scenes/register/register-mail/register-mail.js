import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { Text } from 'react-native-elements';
import SceneContainer from '../../../components/scene-container';
import LoginModule from '../../../components/login-module';

const RegisterMail = ({ componentId }) => (
  <SceneContainer style={{ padding: 50, justifyContent: 'space-evenly' }}>
    <Text h4 style={{ textAlign: 'center' }}>
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
                  alignment: 'center'
                }
              }
            },
            passProps: { ...data }
          }
        })
      }
    />
  </SceneContainer>
);

RegisterMail.propTypes = {
  componentId: PropTypes.string.isRequired
};

export default RegisterMail;
