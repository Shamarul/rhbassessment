import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('find element', () => {
  let data = renderer.create(<App />).toJSON();

  expect();
});
