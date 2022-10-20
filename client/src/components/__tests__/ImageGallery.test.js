/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
//const {render, screen, cleanup} = require('@testing-library/react');
//const ImageGallery = require('../Overview/ImageGallery.jsx');
import ImageGallery from '../Overview/ImageGallery.jsx';

test('should render ImageGallery component', () => {
  render(<ImageGallery currentStyle={{photos: [{}]}} />);
  const imageGalleryElement = screen.getByTestId('imageGallery-1');
  expect(imageGalleryElement).toBeInTheDocument();
})