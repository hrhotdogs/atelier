import React from 'react';
import Axios from 'axios';
import PopulateOutfits from './PopulateOutfits.jsx';
import AddOutfitCard from './AddOutfitCard.jsx';
import {TOKEN} from '../../../../config.js';


const OutfitCards = () => {

  return (
    <>
      <ul className="add-card">
        <AddOutfitCard />
      </ul>
      <ul className="cards">
        <PopulateOutfits />
      </ul>
    </>
  );
};

export default OutfitCards;