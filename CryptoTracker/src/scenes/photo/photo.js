import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import SceneContainer from '../../components/scene-container';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);
const takePicture = async (camera, setUri, componentId) => {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  setUri(data.uri);
  Navigation.pop(componentId);
};

const Photo = ({ componentId, setUri }) => (
  <SceneContainer>
    <RNCamera
      captureAudio={false}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
    >
      {({ camera, status }) => {
        if (status !== 'READY') return <PendingView />;
        return (
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => takePicture(camera, setUri, componentId)}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14 }}> Take photo Profile </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </RNCamera>

  </SceneContainer>
);

Photo.propTypes = {
  componentId: PropTypes.string.isRequired,
};
export default Photo;
