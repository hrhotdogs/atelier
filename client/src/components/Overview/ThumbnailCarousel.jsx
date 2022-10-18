import React from 'react';

const ThumbnailCarousel = ({currentStyle, setMainImageUrl}) => {

  const thumbnailPhotos = [];
  const topOverflowPhotos = [];
  const bottomOverflowPhotos = [];



  const handleThumbnailClick = (photoUrl) => {
    setMainImageUrl(photoUrl);
  }
  return (
    <div>
      {currentStyle.photos.map((photoObj, index) => (
        <div style={{backgroundImage: `url('${photoObj.url}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '85px', height: '85px', margin: '10px'}} key={index} onClick={() => {handleThumbnailClick(photoObj.url)}}></div>
      ))}
    </div>
  )
}

export default ThumbnailCarousel;