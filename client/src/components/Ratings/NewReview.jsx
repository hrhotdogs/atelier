import React, { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import RadioButtons from './RadioButtons.jsx';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  product_id: 0,
  rating: 0,
  recommend: null,
  photos: [],
  characteristics: {},
};

const NewReview = ({ showModal, setShowModal, currentProductID, metaData }) => {
  const [form, setform] = useState({
    ...initialState,
    product_id: currentProductID,
  });
  const summaryRef = useRef();
  const bodyRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();

  const [selectedSizeRating, setSelectedSizeRating] = useState(null);
  const [selectedLengthRating, setSelectedLengthRating] = useState(null);
  const [selectedWidthRating, setSelectedWidthRating] = useState(null);
  const [selectedFitRating, setSelectedFitRating] = useState(null);
  const [selectedComfortRating, setSelectedComfortRating] = useState(null);
  const [selectedQualityRating, setSelectedQualityRating] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, rating: e.target.value });
  };

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
            <input
              maxLength='60'
              placeholder='Summary of review'
              ref={summaryRef}
              required
            ></input>
            <br></br>
            <textarea
              minLength='50'
              maxLength='1000'
              ref={bodyRef}
              placeholder='Enter your review here'
              required
            ></textarea>
            <br></br>
            <input
              placeholder='Enter your email'
              ref={emailRef}
              required
            ></input>
            <br></br>
            <input placeholder='Enter a nickname' ref={nicknameRef}></input>
            <br></br>
            <div>
              Rating: <input type='radio'></input>
              <input
                type='radio'
                value='2'
                onChange={(e) => handleChange(e)}
              ></input>
              <input type='radio'></input>
              <input type='radio'></input>
              <input type='radio'></input>
            </div>
            <br></br>
            Recommend this product? Yes<input type='checkbox'></input>
            No<input type='checkbox'></input>
            <br></br>
            <br></br>
            <div>
              <RadioButtons
                setSelectedSizeRating={setSelectedSizeRating}
                setSelectedComfortRating={setSelectedComfortRating}
                setSelectedFitRating={setSelectedFitRating}
                setSelectedLengthRating={setSelectedLengthRating}
                setSelectedWidthRating={setSelectedWidthRating}
                setSelectedQualityRating={setSelectedQualityRating}
              />
            </div>
            <br></br>
            <input type='submit' value='Send Review'></input>
          </form>
        </div>
      </>,
      document.getElementById('portal')
    );
  }
};
export default NewReview;
