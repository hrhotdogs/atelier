import React from 'react';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
const {useState, useEffect} = React;


const ImageGallery = ({currentStyle}) => {

  // Set local state
  let [mainImageUrl, setMainImageUrl] = useState(currentStyle.photos[0].url);
  console.log(mainImageUrl);

  useEffect(() => {
    setMainImageUrl(currentStyle.photos[0].url)
  }, [currentStyle])

  return (
    <div style={{backgroundImage: `url('${mainImageUrl}')`, backgroundSize: 'cover', width: '550px', height: '550px', backgroundPosition: 'center'}}>
     <ThumbnailCarousel mainImageUrl={mainImageUrl} setMainImageUrl={setMainImageUrl} />
    </div>
  )
}

export default ImageGallery;