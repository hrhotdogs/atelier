import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  product_id: 0,
  rating: 0,
  summary: '',
  body: '',
  recommend: null,
  name: '',
  email: '',
  photos: [],
  characteristics: {},
};

const NewReview = ({ showModal, setShowModal, currentProductID, metaData }) => {
  const [form, setform] = useState({
    ...initialState,
    product_id: currentProductID,
  });

  const handleChange = (e) => {
    setForm({ ...form, rating: e.target.value });
  };

  let values;
  let keys;
  if (metaData.characteristics !== undefined) {
    values = Object.values(metaData.characteristics);
  }

  if (metaData.characteristics !== undefined) {
    keys = Object.keys(metaData.characteristics);
  }

  if (!showModal) {
    return null;
  } else {
    return ReactDom.createPortal(
      <>
        <div className='modal-overlay' onClick={() => setShowModal(false)} />
        <div className='modal-styles'>
          <span className='close' onClick={() => setShowModal(false)}>
            &times;
          </span>
          <form>
            <input maxLength='60' placeholder='Summary of review'></input>
            <br></br>
            <textarea
              minLength='50'
              maxLength='1000'
              placeholder='Enter your review here'
            ></textarea>
            <input placeholder='Enter your email'></input>
            <br></br>
            Rating: <input type='radio'></input>
            <input
              type='radio'
              value='2'
              onChange={(e) => handleChange(e)}
            ></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
            <br></br>
            Recommend this product? Yes<input type='checkbox'></input>
            No<input type='checkbox'></input>
            <br></br>
            Please descirbe the fit:<br></br>{' '}
            {keys.map((key, index) => {
              return (
                <>
                  <div key={index}>
                    {key}
                    <input key={uuidv4()} type='radio' value='1'></input>
                    <input key={uuidv4()} type='radio' value='2'></input>
                    <input key={uuidv4()} type='radio' value='3'></input>
                    <input key={uuidv4()} type='radio' value='4'></input>
                    <input key={uuidv4()} type='radio' value='5'></input>
                  </div>
                </>
              );
            })}
            <br></br>
            <input placeholder='Enter a nickname'></input>
          </form>
        </div>
      </>,
      document.getElementById('portal')
    );
  }
};
export default NewReview;
