/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewList from '../Ratings/ReviewList.jsx';
import ReviewTile from '../Ratings/ReviewTile.jsx';


describe('ReviewList', () => {
  test('renders ReviewList component', () => {
    render(<ReviewList />);
  });
});

