import React from 'react';
import Axios from 'axios';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {

  return (
    <div>
    <div className="related-container">
      <div className="related-title">Related Products</div>
      <div className="container">
        <RelatedCards/>
      </div>
      &nbsp;
      <div className="related-title">Your Outfits</div>
      <div className="container">
        <OutfitCards />
      </div>
    </div>
    </div>
  );
};

export default Related;