import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {name, target as exerciseDetail} from '../components/Detail';

const MockExerciseDetail = () => (
  <Router>
    <exerciseDetail
      name="Air Bike"
      target="abs"
    />
  </Router>
);

describe('ExerciseDetail tests', () => {
  const ExerciseDetail = render(<MockExerciseDetail />);
  test('ExerciseDetail component renders correctly', () => {
    expect(ExerciseDetail).toMatchSnapshot();
  });

  test('ExerciseDetail has a heading Air Bike ', () => {
    render(<MockExerciseDetail />);
    expect(
      screen.findAllByRole('heading', { name: /Air Bike/i }),
    );
  });
  test('ExerciseDetail component has target area', () => {
    render(<MockExerciseDetail />);
    expect(
      screen.findAllByRole('target', { target: /abs/i }),
    );
  });
});