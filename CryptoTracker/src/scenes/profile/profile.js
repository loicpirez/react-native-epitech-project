import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableHighlight,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import SceneContainer from '../../components/scene-container';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DDA0DD',
    height: 200,
  },
  highlight: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    margin: 0,
    padding: 0,
    alignSelf: 'center',
    position: 'absolute',
  },
  body: {
    marginTop: 50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
  },
});

const Profile = ({ componentId }) => {
  const [uri, setUri] = useState('https://i.imgur.com/0XHcPko.jpg');
  console.log("here", componentId);
  if (componentId === undefined) {
    componentId = "Stack.home";
  }
  return (
    <SceneContainer>
      <View style={styles.header} />
      <TouchableHighlight
        style={styles.highlight}
        onPress={() => (Navigation.push(componentId, {
          component: {
            id: 'Photo',
            name: 'Photo',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Photo',
                  alignment: 'center',
                },
              },
            },
            passProps: { setUri },
          },
        }))}
      >
        <Image style={styles.photo} source={{ uri }} />
      </TouchableHighlight>
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Jean Charles</Text>
        </View>
      </View>
    </SceneContainer>
  );
};

Profile.propTypes = {
  componentId: PropTypes.string.isRequired,
};
export default Profile;
