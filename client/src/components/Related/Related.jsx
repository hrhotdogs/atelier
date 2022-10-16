import React from 'react';
import Axios from 'axios';
import {ProductIDContext} from '../Context.jsx';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';

/* *      *********************************   * */
// *********** FEATURE-RP-DEV
/* *      *********************************   * */

const Related = () => {

  return (
    <div className="related">Related Products Section <p></p>
      <RelatedCards />
      <OutfitCards />
    </div>
  );
};

export default Related;