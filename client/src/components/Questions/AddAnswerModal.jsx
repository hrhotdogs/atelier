import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import css from '../../style.css';
import {ProductIDContext} from '../Context.jsx';
import { TOKEN } from '../../../../config.js';

const { useRef, useState, useContext, useEffect } = React;

const AddAnswerModal = ({closeModal, question}) => {
  const {currentProductID, setCurrentProductID} = useContext(ProductIDContext);
  const AnswerRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const photoRef = useRef();
  const [productInfo, setProductInfo] = useState({})
  const productName = productInfo.name;

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setProductInfo(response.data)})
      .catch((err) => {console.log(err)});
  }, [currentProductID])
  console.log(question)

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
    zIndex: 999
  }

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
    zIndex: 1000
  }

  function submitHandler(e) {
    e.preventDefault()
    console.log(photoRef.current.value.length)
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question.question_id}/answers`,
    {
      body: AnswerRef.current.value,
      name: usernameRef.current.value,
      email: emailRef.current.value,
      photos: [photoRef.current.value]
    },
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .then(() => console.log('POSTED!'))
    .catch((err) => console.log('ERROR in post request for ANSWERS', err))
  }

  return ReactDOM.createPortal(
    <div style={modalBackground}>
      <div style={modalContainer}>
        <div>
          <h1>Submit your Answer</h1>
          <h2>{productName}: {question.question_body}</h2>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          Answer:<input type='text' placeholder='your question' required ref={AnswerRef}/><br/>
          Username:<input type='text' placeholder='jackson11' required ref={usernameRef}/><br/>
          Email:<input type='text' placeholder='jackson11@email.com' required ref={emailRef}/><br/>
          photos:<input type='file' multiple accept='image/*' ref={photoRef}/><br/>
          <button type='submit'>Submit Answer</button>
        </form>
        <footer>
          <button onClick={(e) => closeModal(e)}>CANCEL</button>
        </footer>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddAnswerModal;