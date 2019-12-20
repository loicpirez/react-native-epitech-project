import React from 'react';
import ContainerScroll from '../../../../components/container-scroll';
import Item from './components/item';

const TestContentScroll = ({list}) => (
  <ContainerScroll>
    {list && list.map((text, index) => <Item key={index} text={text} />)}
  </ContainerScroll>
);

export default TestContentScroll;
