import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import SceneContainer from '../../components/scene-container';
import Image from '../../components/image';
import LoginModule from '../../components/login-module';
import { Button } from 'react-native-elements';
import { goHome } from '../../navigation/navigator/navigator';
import Logo from '../../assets/logo/logo.png';

const Login = ({ componentId }) => (
  <SceneContainer
    style={{
      padding: 50,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }}
  >
    <Image source={Logo} />
    <LoginModule buttonTitle="Connexion" onPress={data => goHome(data)} />
    <Button
      title="Inscription"
      containerStyle={{ width: '100%' }}
      onPress={() =>
        Navigation.push(componentId, {
          component: {
            id: 'RegisterMail',
            name: 'RegisterMail',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Inscription',
                  alignment: 'center'
                }
              }
            }
          }
        })
      }
    />
  </SceneContainer>
);

Login.propTypes = {
  componentId: PropTypes.string.isRequired
};

export default Login;

// remove goHome() use login if 200 => goHome() else fire error + not move
