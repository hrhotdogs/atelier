import React from 'react';
import Axios from 'axios';
import PopulateOutfits from './PopulateOutfits.jsx';
import { ProductIDContext } from '../Context.jsx';
import {TOKEN} from '../../../../config.js';

const AddOutfitCard = (props) => {
  const { currentProductID, setCurrentProductID } = React.useContext(ProductIDContext);
  const [product, setProduct] = React.useState({});

  const controller = new AbortController();
  var prodIMGStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  var prodObj = {};
  var renderOutfitsList = false;

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
      .catch(err => {});
  }

  const handleOutfitClick = () => {
    let getOutfits = JSON.parse(window.localStorage.getItem("outfits"));
    if (getOutfits === null) {
      let outfit = [product];
      outfit = JSON.stringify(outfit);
      window.localStorage.setItem("outfits", outfit);
    } else {
      let alreadyAdded = false;
      for (let i = 0; i < getOutfits.length; i++) {
        if (getOutfits[i].info.id === product.info.id) {
          alreadyAdded = true;
        }
      }
      if (alreadyAdded) {
        console.log("You've already added this Style to your outfits.");
      } else {
        let outfits = [...getOutfits, product];
        outfits = JSON.stringify(outfits);
        window.localStorage.setItem("outfits", outfits);
      }
    }
    renderOutfitsList = !renderOutfitsList;
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
      <>
        <ul className="add-card">
          <li className="card">
            <div className="card-image" style={prodIMGStyle}>
              <img className="add-image" src="https://as2.ftcdn.net/v2/jpg/00/70/16/29/1000_F_70162903_5mFpUbO3ZfRyD4gslH8j2c5VxjGMKU9G.jpg" onClick={(event) => handleOutfitClick()}></img>
            </div>
            <div className="card-footer">
                <div className="card-content-category">{product.info.category}</div>
                <div className="card-content-name">{product.info.name}</div>
                <div className="card-content-price">${product.info.default_price}</div>
            </div>
          </li>
        </ul>
        <ul className="cards">
          <PopulateOutfits key={renderOutfitsList}/>
        </ul>
      </>
    );
  } else { return null; }
};

export default AddOutfitCard;