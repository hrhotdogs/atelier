/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageGallery from '../Overview/ImageGallery.jsx';

describe('ImageGallery', () => {
  it('should render ImageGallery component', () => {
    render(<ImageGallery currentStyle={{photos: [{}]}} />);
    const imageGalleryElement = screen.getByTestId('imageGallery-1');
    expect(imageGalleryElement).toBeInTheDocument();
  })
})