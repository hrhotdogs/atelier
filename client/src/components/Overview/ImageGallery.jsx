import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect, useRef} = React;


const ImageGallery = ({currentStyle}) => {

  // current range vs. currentIndex => set scrollTop (currentScrollTop +/- height of thumbnail div)

  // Set local state
  const [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  const [carouselAtTop, setCarouselAtTop] = useState(true);
  const [carouselAtBottom, setCarouselAtBottom] = useState(!(currentStyle.photos.length > 5));
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const carouselContainer = useRef(null);
  const thumbnailDivHeight = 121;

  const handleArrowBackClick = () => {
    setSelectedThumbnailIndex(selectedThumbnailIndex - 1);
    setMainImageUrl(currentStyle.photos[selectedThumbnailIndex - 1].url);
    carouselContainer.current.children[0].scrollTop = thumbnailDivHeight * (selectedThumbnailIndex - 3);
  }

  const handleArrowForwardClick = () => {
    setSelectedThumbnailIndex(selectedThumbnailIndex + 1);
    setMainImageUrl(currentStyle.photos[selectedThumbnailIndex + 1].url);
    carouselContainer.current.children[0].scrollTop = thumbnailDivHeight * (selectedThumbnailIndex - 1);
  }

  const showTopArrow = () => {
    if (selectedThumbnailIndex > 0) {
      return  (
        <div onClick={handleArrowBackClick} className='carouselArrowContainer'>
          <i className="arrow up"></i>
        </div>
      )
    } else {
      return (
        <div className='carouselArrowContainer'></div>
      )
    }
  }

  const showBottomArrow = () => {
    if (selectedThumbnailIndex < currentStyle.photos.length - 1) {
      return  (
        <div onClick={handleArrowForwardClick} className='carouselArrowContainer'>
          <i className="arrow down"></i>
        </div>
      )
    } else {
      return (
        <div className='carouselArrowContainer'></div>
      )
    }
  }

  const showLeftArrow = () => {
    if (selectedThumbnailIndex > 0) {
      return (
        <div className='arrowContainer arrowLeftContainer'>
          <div onClick={handleArrowBackClick} className='arrowBox'>
            <i className='arrow left mainBoxArrow'></i>
          </div>
        </div>
      )
    }
  }

  const showRightArrow = () => {
    if (selectedThumbnailIndex !== currentStyle.photos.length - 1) {
      return (
        <div className='arrowContainer arrowRightContainer'>
          <div onClick={handleArrowForwardClick} className='arrowBox'>
            <i className='arrow right mainBoxArrow'></i>
          </div>
        </div>
      )
    }
  }

  // Set actual default values when API data is received
  useEffect(() => {
      setMainImageUrl(currentStyle.photos[0].url);
      setCarouselAtTop(true);
      setCarouselAtBottom(!(currentStyle.photos.length > 5));
  }, [currentStyle])

  return (
    <div style={{display: 'flex', flexDirection: 'row'}} data-testid="imageGallery-1">
      <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', height: '675px'}}>
        <div className='arrowTopBottomContainer'>
          {showTopArrow()}
        </div>
        <div ref={carouselContainer}>
          <ThumbnailCarousel currentStyle={currentStyle} setMainImageUrl={setMainImageUrl} setCarouselAtTop={setCarouselAtTop} setCarouselAtBottom={setCarouselAtBottom} selectedThumbnailIndex={selectedThumbnailIndex} setSelectedThumbnailIndex={setSelectedThumbnailIndex} />
        </div>
        <div className='arrowTopBottomContainer'>
          {showBottomArrow()}
        </div>
      </div>
      <div className='mainImage' style={{borderRadius: '2px', display: 'flex', flexDirection: 'row', backgroundImage: `url('${mainImageUrl}')`, backgroundSize: 'cover', width: '675px', height: '675px', backgroundPosition: 'center'}}>
        {showLeftArrow()}
        {showRightArrow()}
      </div>
    </div>
  )
}

export default ImageGallery;