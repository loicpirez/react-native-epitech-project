import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Button from '../../../../../../components/button';

const Item = ({text}) => {
  const [isCrossed, setCross] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setCross(!isCrossed)}
      style={{
        width: '100%',
        alignItems: 'center',
      }}>
      <Text style={{textDecorationLine: isCrossed ? 'line-through' : null}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Item;
