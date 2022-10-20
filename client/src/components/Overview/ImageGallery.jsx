import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect} = React;


const ImageGallery = ({currentStyle}) => {

  // Set local state
  console.log('rendering gallery');
  console.log('child: ', currentStyle);
  const [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  const [carouselAtTop, setCarouselAtTop] = useState(true);
  const [carouselAtBottom, setCarouselAtBottom] = useState(false);
  console.log(mainImageUrl);

  const handleCarouselScroll = (e) => {
    setCarouselAtBottom(e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight);
    setCarouselAtTop(e.target.scrollTop === 0);
  }

  const showTopArrow = () => {
    if (carouselAtTop) {
      return  (<button style={{paddingLeft: '22px', paddingRight: '22px'}}>^</button>)
    }
  }

  const showBottomArrow = () => {
    if (carouselAtBottom) {
      return  (<button style={{paddingLeft: '22px', paddingRight: '22px'}}>v</button>)
    }
  }

  useEffect(() => {
      setMainImageUrl(currentStyle.photos[0].url);
  }, [currentStyle])

  return (
    <div style={{display: 'flex', flexDirection: 'row'}} data-testid="imageGallery-1">
      <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>{showTopArrow()}</div>
        <div className='thumbnailCarousel' style={{overflow: 'auto', maxHeight: '475px'}} onScroll={(e) => {handleCarouselScroll(e)}}>
          <ThumbnailCarousel currentStyle={currentStyle} setMainImageUrl={setMainImageUrl} />
        </div>
        <div style={{textAlign: 'center', marginTop: '10px'}}>{showBottomArrow()}</div>
      </div>
      <div style={{backgroundImage: `url('${mainImageUrl}')`, backgroundSize: 'cover', width: '650px', height: '650px', backgroundPosition: 'center'}}>
      </div>
    </div>

  )
}

export default ImageGallery;