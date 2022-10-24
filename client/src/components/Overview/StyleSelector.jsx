import React from 'react';
const {useState, useEffect} = React;

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {

  const isColor = (colorString) => {
    let s = new Option().style;
    s.color = colorString;
    return s.color !== '';
  }

  const handleStyleClick = (e, style) => {
    setCurrentStyle(style);
  }

  const showStyleIcon = (style) => {

    let colorExists = isColor(style.name);

    if ((style.style_id === currentStyle.style_id) && colorExists) {
      return (
        <div className='sidebarSelected'>
          <div className='styleIcon' style={{backgroundColor: `${style.name}`}}></div>
        </div>
      )
    } else if ((style.style_id !== currentStyle.style_id) && colorExists) {
      return (
        <div className='sidebarUnselected'>
          <div className='styleIcon' onClick={(e) => {handleStyleClick(e, style)}} style={{backgroundColor: `${style.name}`}}></div>
        </div>
      )
    } else if ((style.style_id === currentStyle.style_id) && !colorExists) {
      return (
        <div className='sidebarSelected'>
          <div className='styleIcon' style={{backgroundImage: `url("https://www.desktopbackground.org/download/1280x720/2010/06/05/28637_rainbow-backgrounds_5000x3750_h.jpg")`,  backgroundSize: 'cover'}}></div>
        </div>
      )
    } else {
      return (
        <div className='sidebarUnselected'>
          <div className='styleIcon' onClick={(e) => {handleStyleClick(e, style)}} style={{backgroundImage: `url("https://www.desktopbackground.org/download/1280x720/2010/06/05/28637_rainbow-backgrounds_5000x3750_h.jpg")`, backgroundSize: 'cover'}}></div>
        </div>
      )
    }
  }

  return (
    <div style={{marginTop: '20px'}}>
      <div style={{fontWeight: 'bold', fontSize: '14pt'}}>
        <span>Style > </span>
        <span>{currentStyle.name}</span>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px'}}>
        {styles.map((style, index) => (
          <div key={index}>{showStyleIcon(style)}</div>
        ))}
      </div>
    </div>
  )
}

export default StyleSelector;