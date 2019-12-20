import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {Text, Input, Button} from 'react-native-elements';
import SceneContainer from '../../../components/scene-container';
import Container from '../../../components/container';

const RegisterMail = ({componentId}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SceneContainer style={{padding: 50, justifyContent: 'space-evenly'}}>
      <Text h4 style={{textAlign: 'center'}}>
        Veuillez saisir vos identifiants de connexion
      </Text>
      <Container style={{width: '100%'}}>
        <Input
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
        />
        <Input
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Mot de passe"
          secureTextEntry
        />
      </Container>
      <Button
        title="Suivant"
        containerStyle={{marginTop: 20}}
        onPress={() =>
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
              passProps: {email, password},
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
