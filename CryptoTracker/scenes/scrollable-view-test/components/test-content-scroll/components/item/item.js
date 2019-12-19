import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Item = ({ text }) => {
  const [isCrossed, setCross] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setCross(!isCrossed)}
      style={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Text style={{ textDecorationLine: isCrossed ? 'line-through' : null }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Item;
