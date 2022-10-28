import React from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import css from '../../style.css';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const { useRef, useState, useContext, useEffect } = React;

const CompareRelatedModal = ({closeModal, product}) => {
  const { currentProductID, setCurrentProductID } = useContext(ProductIDContext);
  const [globalProduct, setGlobalProduct] = useState({});

  useEffect(() => {
    let prodObj = {};
    Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((response) => {
        prodObj.info = response.data;
        Axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}/styles`,
          { headers: { Authorization: TOKEN } }
        )
        .then((response) => {
          prodObj.styles = response.data;
          setGlobalProduct(prodObj);
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentProductID]);

  const modalBackground = {
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    position: 'fixed',
    display: 'flex',
    backgroundColor: 'rgba(200, 200, 200, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  };

  const modalContainer = {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    textAlign: 'center',
    zIndex: 1000,
  };

  if (Object.keys(globalProduct).length !== 0) {
    return ReactDOM.createPortal(
      <>
        <div className="modalBackground" onClick={event => closeModal(event)} />
          <div className="modalContainer" >
            <div className="rltd-modal-cols">
              <div className="rltd-modal-titles-1">{product.info.name}</div>
              <div className="rltd-modal-titles-2">{globalProduct.info.name}</div>
            </div>
            <div className="rltd-modal-cols">
              <div className="rltd-modal-items">{product.info.category}</div>
              <div className="rltd-modal-comparison">category</div>
              <div className="rltd-modal-items">${globalProduct.info.category}</div>
            </div>
            <div className="rltd-modal-cols">
              <div className="rltd-modal-items">${product.info.default_price}</div>
              <div className="rltd-modal-comparison">price</div>
              <div className="rltd-modal-items">${globalProduct.info.default_price}</div>
            </div>
            <div className="rltd-modal-cols">
              <div className="rltd-modal-items">{product.info.description}</div>
              <div className="rltd-modal-comparison">description</div>
              <div className="rltd-modal-items">{globalProduct.info.description}</div>
            </div>
            {/* <div className="rltd-modal-cols">
              <div className="rltd-modal-items">{product.info.features[1].value}</div>
              <div className="rltd-modal-comparison">compare</div>
              <div className="rltd-modal-items">{productInfo.features[1].value}</div>
            </div> */}
          </div>
      </>,
      document.getElementById('portal')
    );
  } else {return null;}
};

export default CompareRelatedModal;
