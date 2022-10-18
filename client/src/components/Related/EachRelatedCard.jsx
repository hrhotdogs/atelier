import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const EachRelatedCard = (props) => {
  const { currentProductID, setCurrentProductID } =
    React.useContext(ProductIDContext);

  const [product, setProduct] = React.useState(props.relatedProduct);

  React.useEffect(() => {
    Axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${props.relatedProduct}`,
      { headers: { Authorization: `${TOKEN}` } }
    )
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductID]);

  const handleRelatedClick = () => {
    setCurrentProductID(product.id);
  };

  return (
    <div>
      <div
        className='card'
        onClick={(event) => {
          handleRelatedClick();
        }}
      >
        <h4>
          <b>{product.name}</b>
        </h4>
        <p>id:{product.id}</p>
      </div>
    </div>
  );
};

export default EachRelatedCard;
