import React from 'react';

const ThumbnailCarousel = ({currentStyle, setMainImageUrl}) => {
  return (
    <div>
      {currentStyle.photos.map((photoObj) => (
        <div style={{backgroundImage: `url('${photoObj.thumbnail_url}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '75px', height: '75px', margin: '10px'}}></div>
      ))}
    </div>
  )
}

export default ThumbnailCarousel;