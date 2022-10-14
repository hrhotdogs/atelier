import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import EachOutfitCard from './EachOutfitCard.jsx';
import {TOKEN} from '../../../../config.js';


const OutfitCards = (props) => {
  const currentState = React.useContext(CurrentInfo);

  //let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  //let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  return (
    <div>Outfit CardS
      {props.outfitsList.map((eachOutfit) =>
        <EachOutfitCard outfit={eachOutfit} />
      )}
    </div>
  );
};

export default OutfitCards;