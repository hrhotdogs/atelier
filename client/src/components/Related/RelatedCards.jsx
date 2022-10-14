import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import EachRelatedCard from './EachRelatedCard.jsx';
import {TOKEN} from '../../../../config.js';


const RelatedCards = ( props ) => {
  // props.relatedProductList = array of related product_id's
  // props.setCurrentProductID = a function with a number input to change global current product_ID
      // **** CALLING THIS F(x) RE-RENDERS APP.JSX

  const currentState = React.useContext(CurrentInfo);

  //let [currentProductID, setCurrentProductID] = currentState.currentProductID;
  //let [currentStyleID, setCurrentStyleID] = currentState.currentStyleID;

  return (
    <div>RelatedCards
      {props.relatedProductsList.map((eachRelatedProduct) =>
        <EachRelatedCard setCurrentProductID={props.setCurrentProductID} relatedProduct={eachRelatedProduct} />
      )}
    </div>
  );
};

export default RelatedCards;