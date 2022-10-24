import React from 'react';
import Axios from 'axios';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {

  return (
    <div>
      <div className="container">
        <RelatedCards/>
      </div>
      <div className="container">
        <OutfitCards />
      </div>
    </div>
  );
};

export default Related;