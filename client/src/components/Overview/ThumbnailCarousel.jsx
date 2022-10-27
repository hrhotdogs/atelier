import React from 'react';
import Thumbnail from './Thumbnail.jsx'
const {useState, useEffect, useRef} = React;

const ThumbnailCarousel = ({currentStyle, setMainImageUrl, setCarouselAtTop, setCarouselAtBottom, selectedThumbnailIndex, setSelectedThumbnailIndex}) => {

  const [carouselScrollTop, setCarouselScrollTop] = useState(0);

  const carouselElem = useRef(null);

  const handleCarouselScroll = (e) => {
    setCarouselScrollTop(e.target.scrollTop);
    setCarouselAtBottom(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight);
    setCarouselAtTop(e.target.scrollTop === 0);
  }

  useEffect(() => {
    setSelectedThumbnailIndex(0);
    carouselElem.current.scrollTop = 0;
  }, [currentStyle]);

  return (
    <div ref={carouselElem} data-testid='thumbnailCarousel-1' className='thumbnailCarousel' style={{overflow: 'auto', maxHeight: '605px', margin: '5px'}} onScroll={(e) => {handleCarouselScroll(e)}}>
      {currentStyle.photos.map((photoObj, index) => (
        <Thumbnail currentStyle={currentStyle} key={index} index={index} selectedThumbnailIndex={selectedThumbnailIndex} setSelectedThumbnailIndex={setSelectedThumbnailIndex} photoObj={photoObj} setMainImageUrl={setMainImageUrl} />
      ))}
    </div>
  )
}

export default ThumbnailCarousel;