import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const EachRelatedCard = (props) => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);

  const [product, setProduct] = React.useState({name: "loading", id: "loading"});


  const delayGetProdInfo = (prodID, ms) => new Promise(resolve => setTimeout(() => {
    Axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`,
      { headers: { Authorization: `${TOKEN}` } }
    )
      .then((res) => {
        resolve(res.data);
      });
  }, ms));

  const setProdInfo = async (relatedID) => {
    await delayGetProdInfo(relatedID, props.index*1000)
      .then(
        (productObj) => {
          console.log('productObj', productObj);
          console.log('index: ', props.index);
          setProduct(productObj);
        }
      )
  }

  React.useEffect(() => {
    console.log("mounting!");
    setProdInfo(props.relatedProduct);
    return () => console.log('unmounting...');
  }, [props.currentProductID]);

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
