import React from 'react';
import Axios from 'axios';
import EachRelatedCard from './EachRelatedCard.jsx';
import {TOKEN} from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';


const RelatedCards = () => {
  /* *************************************
    - access to the global state variable, use productID
    - set the Global state variable, use setProductID()
--- Put the line below in consumers with the Context import from line 6 ----
    const { productID, setProductID } = React.useContext(ProductIDContext);
//********************************************* */

  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);

  const [relatedProducts, setRelatedProducts] = React.useState([]);

  React.useEffect(()=> {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/related`, { headers: { "Authorization": `${TOKEN}` } })
    .then( (res) => {
      setRelatedProducts(res.data);
    })
    .catch( (err) => {
      console.log(err);
    });
  }, [currentProductID]);

  return (
    <div>
      <p></p>
      Click Any name/id below to change the Global currentProductID context/useState
      {relatedProducts.map((eachRelatedProduct) =>
        <EachRelatedCard relatedProduct={eachRelatedProduct}/>
      )}
    </div>
  );
};

export default RelatedCards;