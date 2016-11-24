import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Text from './Text';
import s from './Text.css';

describe('atoms: Text', () => {
  it('expect to have className', () => {
    console.log('test');
    expect(shallow(<Text />)).to.have.className(s.container);
  });
});
