import React from 'react';
const {useState} = React;

const Thumbnail = ({currentStyle, index, selectedThumbnailIndex, setSelectedThumbnailIndex, photoObj, setMainImageUrl}) => {

  const handleThumbnailClick = (e, index, photoUrl) => {
    setMainImageUrl(photoUrl);
    setSelectedThumbnailIndex(index);
  }

  if (index === selectedThumbnailIndex) {
    return (
      <div className='galleryThumbnail' style={{margin: '15px', border: '3px solid black'}} data-testid={`thumbnailElement-${index}`}>
        <div style={{backgroundImage: `url('${photoObj.url}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100px', height: '100px', cursor: 'pointer'}} onClick={(e) => {handleThumbnailClick(e, index, photoObj.url)}}></div>
      </div>
    )
  } else {
    return (
      <div style={{margin: '15px', padding: '3px'}}>
        <div style={{backgroundImage: `url('${photoObj.url}')`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100px', height: '100px', cursor: 'pointer'}} onClick={(e) => {handleThumbnailClick(e, index, photoObj.url)}} data-testid={`thumbnailElement-${index}`}></div>
      </div>

    )
  }
}

export default Thumbnail;