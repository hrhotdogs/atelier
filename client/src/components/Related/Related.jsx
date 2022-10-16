import React from 'react';
import Axios from 'axios';
import {ProductIDContext} from '../Context.jsx';
import RelatedCards from './RelatedCards.jsx';
import OutfitCards from './OutfitCards.jsx';
import {TOKEN} from '../../../../config.js';

/* *      *********************************   * */
// *********** FEATURE-RP-DEV
/* *      *********************************   * */

const Related = () => {

  const [relatedProducts, setRelatedProducts] = React.useState([]);

  React.useEffect(()=> {
  Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/41244/related`, { headers: { "Authorization": `${TOKEN}` } })
  .then( (res) => {
    setRelatedProducts(res.data);
  })
  .catch( (err) => {
    console.log(err);
  });
}, []);

  return (
    <div className="related">Related Products Section<p></p>
    {relatedProducts.map((each) => <div>{each}</div>)}
      <RelatedCards />
      <OutfitCards />
    </div>
  );
};

export default Related;