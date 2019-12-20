import React from 'react';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import SceneContainer from '../../components/scene-container';
import Image from '../../components/image';
import Container from '../../components/container';
import {Input, Button} from 'react-native-elements';
import {goHome} from '../../navigation/navigator/navigator';
import Logo from '../../assets/logo/logo.png';

const Login = ({componentId}) => (
  <SceneContainer
    style={{
      padding: 50,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    }}>
    <Image source={Logo} />
    <Container style={{width: '100%'}}>
      <Input placeholder="Email" />
      <Input placeholder="Mot de passe" secureTextEntry />
      <Button
        title="Connexion"
        containerStyle={{marginTop: 20}}
        onPress={() => goHome()}
      />
    </Container>
    <Button
      title="Inscription"
      containerStyle={{width: '100%'}}
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
                  alignment: 'center',
                },
              },
            },
          },
        })
      }
    />
  </SceneContainer>
);

Login.propTypes = {
  componentId: PropTypes.string.isRequired,
};

export default Login;
