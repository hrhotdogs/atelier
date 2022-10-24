import React from 'react';
import Axios from 'axios';
import EachOutfitCard from './EachOutfitCard.jsx';
import {TOKEN} from '../../../../config.js';
import AddOutfitCard from './AddOutfitCard.jsx';


const OutfitCards = () => {

  //somehow access Window.localStorage to get all outfits, put them in...
  let outfitsList = [3, 3, 4];

  return (
    <div>
      <ul className="cards">
        <AddOutfitCard />
        <div></div>
        {outfitsList.length !== 0 ? outfitsList.map((eachOutfit, index) => {
          return(
            <EachOutfitCard outfit={eachOutfit} index={index} key={index}/>
          )}
        ) : null}
      </ul>
    </div>
  );
};

export default OutfitCards;