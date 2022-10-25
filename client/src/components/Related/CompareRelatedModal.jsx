import React from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import css from '../../style.css';
import { ProductIDContext } from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const { useRef, useState, useContext, useEffect } = React;

const CompareRelatedModal = ({ closeModal }) => {
  const { currentProductID, setCurrentProductID } = useContext(ProductIDContext);
  const [productInfo, setProductInfo] = useState({});


  useEffect(() => {
    Axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`,
        { headers: { Authorization: TOKEN } }
      )
      .then((response) => {
        setProductInfo(response.data);
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

  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainer" onClick={event => {closeModal(event)}}>
        <div className="rltd-modal-cols">
          <div className="rltd-modal-titles">name1</div>
          <div className="rltd-modal-titles">name2</div>
        </div>
        <div className="rltd-modal-cols">
          <div className="rltd-modal-items">1a</div>
          <div className="rltd-modal-comparison">compare</div>
          <div className="rltd-modal-items">1b</div>
        </div>
        <div className="rltd-modal-cols">
          <div className="rltd-modal-items">2a</div>
          <div className="rltd-modal-comparison">compare</div>
          <div className="rltd-modal-items">2b</div>
        </div>
        <div className="rltd-modal-cols">
          <div className="rltd-modal-items">3a</div>
          <div className="rltd-modal-comparison">compare</div>
          <div className="rltd-modal-items">3b</div>
        </div>
        <div className="rltd-modal-cols">
          <div className="rltd-modal-items">4a</div>
          <div className="rltd-modal-comparison">compare</div>
          <div className="rltd-modal-items">4b</div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default CompareRelatedModal;
