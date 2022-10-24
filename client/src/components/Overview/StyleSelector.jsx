import React from 'react';
const {useState, useEffect} = React;

const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {

  const handleStyleClick = (e, style) => {
    setCurrentStyle(style);
  }

  const showStyleIcon = (style) => {
    if (style.style_id === currentStyle.style_id) {
      return (
        <div className='sidebarSelected'>
          <div className='styleIcon' style={{backgroundColor: `${style.name}`}}></div>
        </div>
      )
    } else {
      return (
        <div className='sidebarUnselected'>
          <div className='styleIcon' onClick={(e) => {handleStyleClick(e, style)}} style={{backgroundColor: `${style.name}`}}></div>
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