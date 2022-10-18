import React from 'react';
import Axios from 'axios';
import EachOutfitCard from './EachOutfitCard.jsx';
import {TOKEN} from '../../../../config.js';


const OutfitCards = (props) => {

  //somehow access Window.localStorage to get all outfits, put them in...
  let outfitsList = [1];

  return (
    <div>
      {/* <p></p>
      {outfitsList.map((eachOutfit) =>
        <EachOutfitCard outfit={eachOutfit} />
      )} */}
    </div>
  );
};

export default OutfitCards;