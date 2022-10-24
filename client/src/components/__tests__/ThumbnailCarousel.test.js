/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';

test('should render ThumbnailCarousel component', () => {
  render(<App />);
  const thumbnailCarouselElement = screen.getByTestId('thumbnailCarousel-1');
  expect(thumbnailCarouselElement).toBeInTheDocument();
})