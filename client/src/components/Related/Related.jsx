import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';


const Related = () => {
  const currentState = React.useContext(CurrentInfo);

  let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  //get request for all related, put them in...
  let relatedProductsList = [];
  //somehow access Window.localStorage to get all outfits, put them in...
  let outfitsList = [];

  return (
    <div className="related">Related...{currentProductID}
      <RelatedCards relatedProductsList={relatedProductsList} setCurrentProductID={setCurrentProductID} />
      <OutfitCards outfitsList={outfitsList} currentStyleID={currentStyleID} />
    </div>
  );
};

export default Related;