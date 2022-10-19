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

  const handleRelatedClick = (e) => {
    e.preventDefault();
    setCurrentProductID(product.id);
  };

  return (
    <li className="card">
      <div onClick={(event) => { handleRelatedClick(event) }}>
        <h3 className="card-title">{product.name}</h3>
        <div className="card-content">
          id:{product.id}
        </div>
      </div>
    </li>
  );
};

export default EachRelatedCard;
