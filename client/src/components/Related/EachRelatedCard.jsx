import React from 'react';
import Axios from 'axios';
import {ProductIDContext} from '../Context.jsx';
import {TOKEN} from '../../../../config.js';


const EachRelatedCard = (props) => {

  const { productID, setProductID } = React.useContext(ProductIDContext);

  const [product, setProduct] = React.useState(props.relatedProduct);

  React.useEffect(()=> {
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${props.relatedProduct}`, { headers: { "Authorization": `${TOKEN}` } })
    .then( (res) => {
      setProduct(res.data);
    })
    .catch( (err) => {
      console.log(err);
    });
  }, [productID]);

  const handleRelatedClick = () => {
    setProductID(product.id);
  }

  return (
    <div>
      <article onClick={(event) => { handleRelatedClick() }}>
        name: {product.name}, id:{product.id}
      </article>
    </div>
  );
};

export default EachRelatedCard;