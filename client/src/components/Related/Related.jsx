import React from 'react';
import Axios from 'axios';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {

  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  return (
    <div className="related">Related Products Section <p></p> Current Product ID (Global State) : {currentProductID}
      <RelatedCards currentProductID={currentProductID} setCurrentProductID={setCurrentProductID} />
      <OutfitCards currentStyleID={currentStyleID} />
    </div>
  );
};

export default Related;