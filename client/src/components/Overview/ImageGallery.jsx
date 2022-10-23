import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect} = React;


const ImageGallery = ({currentStyle}) => {

  // Set local state
  const [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  const [carouselAtTop, setCarouselAtTop] = useState(true);
  const [carouselAtBottom, setCarouselAtBottom] = useState(!(currentStyle.photos.length > 5));

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
        <ThumbnailCarousel currentStyle={currentStyle} setMainImageUrl={setMainImageUrl} setCarouselAtTop={setCarouselAtTop} setCarouselAtBottom={setCarouselAtBottom} />
        <div style={{height: '35px', position: 'relative'}}>{showBottomArrow()}</div>
      </div>
      <div style={{backgroundSize: 'cover', width: '675px', height: '675px', backgroundPosition: 'center'}}>
        <div style={{position: 'relative', width: '100px', height: '675px'}}><i className='arrow left' style={{position: 'absolute', top: '50%', left: '50%'}}></i></div>
        <div><i className='arrow right'></i></div>
      </div>
    </div>

  )
}

export default ImageGallery;