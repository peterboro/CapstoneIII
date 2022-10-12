import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import BodyPart from '../components/BodyPart';

const TestRenderer = require('react-test-renderer');

it('Renders body part correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <BodyPart />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});