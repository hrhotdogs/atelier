import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';


const ImageGallery = ({currentImage, currentStyleThumbnails}) => {


  return (
    <div>
      Image gallery
      <ThumbnailCarousel currentImage={currentImage} currentStyleThumbnails={currentStyleThumbnails} />
    </div>
  )
}

export default ImageGallery;