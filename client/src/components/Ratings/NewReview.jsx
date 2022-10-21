import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

const initialState = {
  product_id: 0,
  summary: '',
  body: '',
  recommend: false,
  name: '',
  email: '',
  photos: [],
  characteristics: {},
};

const NewReview = ({ showModal, setShowModal }) => {
  const [form, setform] = useState(initialState);
  if (!showModal) {
    return null;
  } else {
    return ReactDom.createPortal(
      <>
        <div className='modal-overlay' />
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
            Yes<input type='checkbox'></input>
            No<input type='checkbox'></input>
            <br></br>
            Please descirbe the fit:<br></br> Too small
            <input type='radio'></input>
            <input type='radio'></input>
            <input type='radio'></input>
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
