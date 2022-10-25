import React from 'react';
import Axios from 'axios';
import AddOutfitCard from './AddOutfitCard.jsx';
import PopulateOutfits from './PopulateOutfits.jsx';
import { ProductIDContext } from '../Context.jsx';
import {TOKEN} from '../../../../config.js';


const OutfitCards = () => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);
  const [renderOutfit, setRenderOutfit] = React.useState(true);

  return (
    <>
      <div className="add-card-container">
        <AddOutfitCard currentProductID={currentProductID} setRenderOutfit={setRenderOutfit} renderOutfit={renderOutfit}/>
      </div>
      <PopulateOutfits renderOutfit={renderOutfit}/>
    </>
  );
};

export default OutfitCards;