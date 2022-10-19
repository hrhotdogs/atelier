import React from 'react';
import Axios from 'axios';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {

  return (
    <div className="container"><p></p>
      <h2>Related Products Section</h2>
      <RelatedCards />
      <OutfitCards />
    </div>
  );
};

export default Related;