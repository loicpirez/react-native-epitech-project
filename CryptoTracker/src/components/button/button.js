import React from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, ViewPropTypes} from 'react-native';

const Button = ({onClick, style, children}) => (
  <TouchableNativeFeedback onPress={() => onClick} style={style}>
    {children}
  </TouchableNativeFeedback>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

export default Button;
