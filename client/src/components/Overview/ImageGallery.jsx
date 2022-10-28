import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect} = React;


const ImageGallery = ({currentStyle}) => {

  // Set local state
  const [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  const [carouselAtTop, setCarouselAtTop] = useState(true);
  const [carouselAtBottom, setCarouselAtBottom] = useState(!(currentStyle.photos.length > 5));
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleArrowBackClick = () => {
    if (selectedThumbnailIndex > 0) {
      setSelectedThumbnailIndex(selectedThumbnailIndex - 1);
      setMainImageUrl(currentStyle.photos[selectedThumbnailIndex - 1].url);
    }
  }

  const handleArrowForwardClick = () => {
    if (selectedThumbnailIndex < currentStyle.photos.length - 1) {
      setSelectedThumbnailIndex(selectedThumbnailIndex + 1);
      setMainImageUrl(currentStyle.photos[selectedThumbnailIndex + 1].url);
    }
  }

  const showTopArrow = () => {
    if (!carouselAtTop) {
      return  (<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight: 'bold'}}><i className="arrow up"></i></div>)
    } else {
      return (<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}></div>)
    }
  }

  const showBottomArrow = () => {
    if (!carouselAtBottom) {
      return  (<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', fontWeight: 'bold'}}><i className="arrow down"></i></div>)
    } else {
      return (<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}></div>)
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
        <div style={{height: '35px', position: 'relative'}}>{showTopArrow()}</div>
        <ThumbnailCarousel currentStyle={currentStyle} setMainImageUrl={setMainImageUrl} setCarouselAtTop={setCarouselAtTop} setCarouselAtBottom={setCarouselAtBottom} selectedThumbnailIndex={selectedThumbnailIndex} setSelectedThumbnailIndex={setSelectedThumbnailIndex} />
        <div style={{height: '35px', position: 'relative'}}>{showBottomArrow()}</div>
      </div>
      <div className='mainImage' style={{borderRadius: '2px', display: 'flex', flexDirection: 'row', backgroundImage: `url('${mainImageUrl}')`, backgroundSize: 'cover', width: '675px', height: '675px', backgroundPosition: 'center'}}>
        <div className='arrowContainer arrowLeftContainer'>
          <div onClick={handleArrowBackClick} className='arrowBox'>
            <i className='arrow left mainBoxArrow'></i>
          </div>
        </div>
        <div className='arrowContainer arrowRightContainer'>
          <div onClick={handleArrowForwardClick} className='arrowBox'>
            <i className='arrow right mainBoxArrow'></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery;