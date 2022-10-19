import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect} = React;


const ImageGallery = ({currentStyle}) => {

  // Set local state
  console.log('rendering gallery');
  console.log('child: ', currentStyle);
  const [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  console.log(mainImageUrl);

  const showTopArrow = () => {
    if (1 === 1) {
      return  (<button style={{paddingLeft: '22px', paddingRight: '22px'}}>^</button>)
    }
  }

  const showBottomArrow = () => {
    if (1 === 1) {
      return  (<button style={{paddingLeft: '22px', paddingRight: '22px'}}>v</button>)
    }
  }

  useEffect(() => {
      setMainImageUrl(currentStyle.photos[0].url);
  }, [currentStyle])

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <div style={{textAlign: 'center'}}>{showTopArrow()}</div>
        <div style={{overflow: 'hidden', maxHeight: '475px'}}>
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