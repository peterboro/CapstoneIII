import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Test for Navbar component', () => {
  test('Renders Navbar correctly', () => {
    const navbar = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(navbar).toMatchSnapshot();
  });
});