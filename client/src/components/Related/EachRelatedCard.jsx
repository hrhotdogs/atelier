import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const EachRelatedCard = (props) => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);

  const [product, setProduct] = React.useState({});

  // AbortController to be used as a signal for the GET and to abort any open requests on unmounting of this component (see the "return" statement in the useEffect fx below)
  const controller = new AbortController();

  // Promise with async GET for one related product details only resolves after request finishes
  const delayGetProdInfo = (prodID, ms) => new Promise(resolve => setTimeout(() => {
    Axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`,
      { headers: { Authorization: `${TOKEN}` }, signal: controller.signal }
    )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {})
  }, ms));

  // async fx that awaits the delayGetProdInfo promise to set the product object of this related product to be used in rendering
  const setProdInfo = async (relatedID) => {
    await delayGetProdInfo(relatedID, props.index*1000)
      .then(
        (productObj) => {
          setProduct(productObj);
        }
      )
  }

  // on each change of the global state, GET this related product's details from the API, wait for the request, set this component's product to the requested object
  // on unmount of this component, abort the current GET if unfinished and setProduct back to an empty object to avoid memory leaks and avoid misrenders of previous render's information
  React.useEffect(() => {
    setProdInfo(props.relatedProduct);
    return () => {
      controller.abort();
      setProduct({});
    }
  }, [currentProductID]);

  // set the global product id to this related product's ID onClick
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
