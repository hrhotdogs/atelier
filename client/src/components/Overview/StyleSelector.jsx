import React from 'react';
import {StyleIDContext} from '../StyleContext.jsx';
const {useState, useEffect, useContext} = React;


const StyleSelector = ({styles, currentStyle, setCurrentStyle}) => {

  const { currentStyleID, setCurrentStyleID } = useContext(StyleIDContext);

  const isColor = (colorString) => {
    let s = new Option().style;
    s.color = colorString;
    return s.color !== '';
  }

  const handleStyleClick = (e, style) => {
    setCurrentStyle(style);
    setCurrentStyleID(style.style_id);
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

  const showIconRows = (styles) => {
    const iconRows = [];
    let newIconRow = [];
    for (let i = 0; i < styles.length; i++) {
      // If current index is a multiple of 5, push current row of 5 elements and start new row
      if (i % 5 === 0) {
        iconRows.push(newIconRow);
        newIconRow = [];
      }

      // Push element at current index to current row
      newIconRow.push(styles[i]);

      // Push last row
      if (i === styles.length - 1) {
        iconRows.push(newIconRow);
      }
    }
    return iconRows;
  }

  return (
    <div style={{marginTop: '20px'}}>
      <div style={{fontSize: '14pt'}}>
        <span>Style > </span>
        <span>{currentStyle.name}</span>
      </div>
      <div style={{marginTop: '10px'}}>
        {showIconRows(styles).map((row, index) => (
          <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
            {row.map((style, innerIndex) => (
              <div key={innerIndex}>{showStyleIcon(style)}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StyleSelector;