import React from 'react';
import { ProductIDContext } from '../Context.jsx';
import { StyleIDContext } from '../StyleContext.jsx';
import {TOKEN} from '../../../../config.js';

const EachOutfitCard = (props) => {
  const { currentStyleID, setCurrentStyleID } = React.useContext(StyleIDContext);

  var prodIMGStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const handleOutfitClick = () => {
    let outfits = JSON.parse(window.localStorage.getItem("outfits"));
    for (let i = 0; i < outfits.length; i++) {
      if (outfits[i].info.id === props.outfit.info.id) {
        outfits.splice(i, 1);
      }
    }
    outfits = JSON.stringify(outfits);
    window.localStorage.setItem("outfits", outfits);
    props.setOutfitsList(JSON.parse(window.localStorage.getItem("outfits")));
  }

  if (props.outfit.styles.results[0].photos[0].thumbnail_url === null) {
    prodIMGStyle.backgroundImage = "url(https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png)";
  } else {
    let isFound = false;
    for (let i = 0; i < props.outfit.styles.results.length; i++) {
      if (currentStyleID === props.outfit.styles.results[i].style_id) {
        prodIMGStyle.backgroundImage = `url(${props.outfit.styles.results[i].photos[0].thumbnail_url})`;
        isFound = true;
      }
    }
    if (!isFound) {
      prodIMGStyle.backgroundImage = `url(${props.outfit.styles.results[0].photos[0].thumbnail_url})`;
    }
  }

  return (
    <li className="card" data-testid="outfitCard-1">
      <div className="card-image" style={prodIMGStyle}>
        <img className="add-image" alt='minus icon' src="https://as2.ftcdn.net/v2/jpg/01/18/56/07/1000_F_118560777_NB7KWVB2THqgGcFhOsQB0NytC6uLnhz0.jpg" onClick={event => {handleOutfitClick()}}></img>
      </div>
      <div className="card-footer">
          <div className="card-content-category">{props.outfit.info.category}</div>
          <div className="card-content-name">{props.outfit.info.name}</div>
          <div className="card-content-slogan">{props.outfit.info.slogan}</div>
          <div className="card-content-price">${props.outfit.info.default_price}</div>
      </div>
    </li>
  );
}

export default EachOutfitCard;