import React from 'react';
import Axios from 'axios';
import CurrentInfo from '../Context.jsx';
import {TOKEN} from '../../../../config.js';


const EachRelatedCard = (props) => {
  // props.setCurrentProductID = a function with a number input to change global current product_ID
      // **** CALLING THIS F(x) RE-RENDERS APP.JSX
  const handleRelatedClick = () => {
    props.setCurrentProductID(props.relatedProduct.id);
  }

  return (
    <div>
      <article onClick={(event) => { handleRelatedClick() }}>
        name: {props.relatedProduct.name}, id:{props.relatedProduct.id}
      </article>
    </div>
  );
};

export default EachRelatedCard;