import React from 'react';

const ThumbnailCarousel = ({currentStyle, setMainImageUrl}) => {
  const handleThumbnailClick = (photoUrl) => {
    setMainImageUrl(photoUrl);
  }
  return (
    <div>
      {currentStyle.photos.map((photoObj, index) => (
        <div style={{backgroundImage: `url('${photoObj.url}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '75px', height: '75px', margin: '10px'}} key={index} onClick={() => {handleThumbnailClick(photoObj.url)}}></div>
      ))}
    </div>
  )
}

export default ThumbnailCarousel;