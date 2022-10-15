import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import EachOutfitCard from './EachOutfitCard.jsx';
import {TOKEN} from '../../../../config.js';


const OutfitCards = (props) => {
  const currentState = React.useContext(CurrentInfo);

  //let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  //let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  //somehow access Window.localStorage to get all outfits, put them in...
  let outfitsList = [1];

  return (
    <div>
      <p></p>
      {outfitsList.map((eachOutfit) =>
        <EachOutfitCard outfit={eachOutfit} />
      )}
    </div>
  );
};

export default OutfitCards;