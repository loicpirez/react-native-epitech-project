import React from 'react';
import PropTypes from 'prop-types';
import ContainerScroll from '../../../../components/container-scroll';
import Item from './components/item';

const TestContentScroll = ({ list }) => (
  <ContainerScroll>
    {/* eslint-disable */}
    {list && list.map((text, index) => <Item key={index} text={text} />)}
    {/* eslint-enable */}
  </ContainerScroll>
);

TestContentScroll.propTypes = {
  list: PropTypes.arrayOf(String).isRequired,
};

export default TestContentScroll;
