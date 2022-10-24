import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import {TOKEN} from '../../../../config.js';


const EachOutfitCard = () => {
  var prodIMGStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };



  return (
    <li className="card">
      <div className="card-image" style={prodIMGStyle} />
      <div className="card-footer">
          <div className="card-content-category">outfit category</div>
          <div className="card-content-name">Outfit Name</div>
          <div className="card-content-price">$100.00</div>
      </div>
    </li>
  );
};

export default EachOutfitCard;