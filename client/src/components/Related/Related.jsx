import React from 'react';
import Axios from 'axios';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {

  return (
    <div className="related">Related Products Section<p></p>
      <RelatedCards />
      <OutfitCards />
    </div>
  );
};

export default Related;