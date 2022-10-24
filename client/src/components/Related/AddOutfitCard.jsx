import React from 'react';
import Axios from 'axios';
import { ProductIDContext } from '../Context.jsx';
import {TOKEN} from '../../../../config.js';

const AddOutfitCard = () => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);
  const [product, setProduct] = React.useState({});

  const controller = new AbortController();
  var prodIMGStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  var prodObj = {};

  const getProdInfo = () => {
    Axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`,
      { headers: { Authorization: `${TOKEN}` }, signal: controller.signal }
    )
      .then((res) => {
        prodObj.info = res.data;
      })
      .then(() => {
        Axios.get(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`,
          { headers: { Authorization: `${TOKEN}` }, signal: controller.signal }
        )
          .then((res) => {
            prodObj.styles = res.data;
            setProduct(prodObj);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch(err => {console.log(err)});
  }

  const handleOutfitClick = () => {
    let outfits = JSON.parse(window.localStorage.getItem("outfits"));
    console.log("outfits localstorage: ", outfits);
    outfits = JSON.stringify({...outfits, product});
    window.localStorage.setItem("outfits", outfits);
  }

  React.useEffect(() => {
    getProdInfo();
    return () => {
      controller.abort();
      setProduct({});
    }
  }, [currentProductID]);

  var isEmpty = true;

  if (Object.keys(product).length !== 0) {
    isEmpty = false;
    if (product.styles.results[0].photos[0].thumbnail_url === null) {
      prodIMGStyle.backgroundImage = "url(https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png)";
    } else {
        prodIMGStyle.backgroundImage = `url(${product.styles.results[0].photos[0].url})`;
      }
    return (
      <li className="card" onClick={(event) => handleOutfitClick()}>
        <div className="card-image" style={prodIMGStyle}>
          <img className="add-image" src="https://as2.ftcdn.net/v2/jpg/00/70/16/29/1000_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg"></img>
        </div>
        <div className="card-footer">
            <div className="card-content-category">{product.info.category}</div>
            <div className="card-content-name">{product.info.name}</div>
            <div className="card-content-price">${product.info.default_price}</div>
        </div>
      </li>
    );
  } else { return null; }
};

export default AddOutfitCard;