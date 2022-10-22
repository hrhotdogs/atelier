import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const EachRelatedCard = (props) => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);

  // product.info = specific prod GET, product.styles = prod styles GET
  const [product, setProduct] = React.useState({});
  var prodIMGStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  // AbortController to be used as a signal for the GET and to abort any open requests on unmounting of this component (see the "return" statement in the useEffect fx below)
  const controller = new AbortController();

  // Promise with async GET for one related product details only resolves after request finishes
  const delayGetProdInfo = (prodID, ms) => new Promise(resolve => setTimeout(() => {
    let prodObj = {};
    Axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}`,
      { headers: { Authorization: `${TOKEN}` }, signal: controller.signal }
    )
      .then((res) => {
        prodObj.info = res.data;
        // resolve(res.data);
      })
      .then(() => {
        Axios.get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodID}/styles`,
          { headers: { Authorization: `${TOKEN}` }, signal: controller.signal }
        )
          .then((res) => {
            prodObj.styles = res.data;
            resolve(prodObj);
          })
          .catch((err) => {
            console.log(err);
          });
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
    setCurrentProductID(product.info.id);
  };

  var isEmpty = true;

  if (Object.keys(product).length !== 0) {
    isEmpty = false;
    if (product.styles.results[0].photos[0].thumbnail_url === null) {
      prodIMGStyle.backgroundImage = "url(https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png)";
    } else {
        prodIMGStyle.backgroundImage = `url(${product.styles.results[0].photos[0].url})`;
      }
  }

  if (!isEmpty) {
    return (
      <li className="card" style={prodIMGStyle} onClick={(event) => { handleRelatedClick(event) }}>
            <div className="card-content-name">{product.info.name}</div>
            <div className="card-content-id">id: {product.info.id}</div>
      </li>
    )
  } else { return null; }
};

export default EachRelatedCard;
