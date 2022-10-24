import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewList from '../Ratings/ReviewList.jsx';

test('should render ReviewList component', () => {
  render(<ReviewList currentStyle={{listOfReviews: [{}]}} />);
  const reviewListElement = screen.getByTestId('reviewList-1');
  expect(reviewListElement).toBeInTheDocument();
})