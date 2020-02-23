import React, { useState } from 'react';
import { Navigation } from 'react-native-navigation';
import {
  Button, Text, StyleSheet, FlatList, View, PanResponder,
} from 'react-native';
import SceneContainer from '../../components/scene-container';

const styles = StyleSheet.create({
  row: { alignItems: 'center', padding: 15, borderBottomWidth: 1},
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  secondaryText: { color: 'grey' },
});

const getCrypto = () => [{
  value: 8946.57,
  name: 'bitcoin',
},
{
  value: 242.64,
  name: 'ethereum',
}, {
  value: 0.2535,
  name: 'ripple',
}, {
  value: 0.00262878,
  name: 'Dogecoin',
}, {
  value: 72.93,
  name: 'Litecoin',
},

];
const panResponder = (name, crypto, useCrypto) => PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onPanResponderMove: (evt, gestureState) => {
    console.log('move=>', gestureState.moveX);
    if (gestureState.moveX > 100) {
      console.log(name);
      useCrypto(crypto.filter((item) => item.name !== name));
    }
  },
});

const Item = ({
  name, value, crypto, useCrypto,
}) => (
  <View style={styles.row} {...panResponder(name, crypto, useCrypto).panHandlers}>
    <Text style={styles.primaryText}>
      1
      {' '}
      {name}
      {' '}
is
      {' '}

      {value}
€
      {' '}
    </Text>
  </View>
);

const Home = () => {
  const [crypto, useCrypto] = useState(getCrypto());

  return (
    <SceneContainer style={{ backgroundColor: 'white' }, {flex: 1}}>
      <View>
        <FlatList
          data={crypto}
          renderItem={({ item }) => (
            <Item
              value={item.value}
              crypto={crypto}
              useCrypto={useCrypto}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View style={{flex: 1, marginBottom: 5, justifyContent: 'flex-end',}}>
      <Button  title="reset crypto" onPress={() => useCrypto(getCrypto())}/>
      </View>
      <Button
        title="go to Profile"
        onPress={() => Navigation.push('Stack.home', {
          component: {
            id: 'Profile',
            name: 'Profile',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Profile',
                  alignment: 'center',
                },
              },
            },
          },
        })}
      />
    </SceneContainer>
  );
};

export default Home;
