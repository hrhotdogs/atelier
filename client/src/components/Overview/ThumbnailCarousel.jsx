import React from 'react';
import Thumbnail from './Thumbnail.jsx'
const {useState, useEffect} = React;

const ThumbnailCarousel = ({currentStyle, setMainImageUrl, setCarouselAtTop, setCarouselAtBottom}) => {

  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleCarouselScroll = (e) => {
    setCarouselAtBottom(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight);
    setCarouselAtTop(e.target.scrollTop === 0);
  }

  useEffect(() => {
    setSelectedThumbnailIndex(0);
  }, [currentStyle])

  return (
    <div className='thumbnailCarousel' style={{overflow: 'auto', maxHeight: '605px', margin: '5px'}} onScroll={(e) => {handleCarouselScroll(e)}}>
      {currentStyle.photos.map((photoObj, index) => (
        <Thumbnail currentStyle={currentStyle} key={index} index={index} selectedThumbnailIndex={selectedThumbnailIndex} setSelectedThumbnailIndex={setSelectedThumbnailIndex} photoObj={photoObj} setMainImageUrl={setMainImageUrl} />
      ))}
    </div>
  )
}

export default ThumbnailCarousel;