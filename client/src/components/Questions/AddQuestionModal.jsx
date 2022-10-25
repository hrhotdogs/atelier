import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

const { useRef, useState, useEffect } = React;

const AddQuestionModal = ({ closeModal, productName, postQuestions }) => {
  const questionRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();

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
    postQuestions(questionRef.current.value, usernameRef.current.value, emailRef.current.value)
    closeModal(e)
  }

  return ReactDOM.createPortal(
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div>
          <h1>Ask Your Question</h1>
          <h2>About the {productName}</h2>
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
          <div>
            <label>Question</label><br/>
            <input className='input' type='text' placeholder='your question' ref={questionRef} required/><br/>
          </div>
          <div>
            <label>Username</label><br/>
            <input className='input' type='text' placeholder='jackson11'ref={usernameRef} required/><br/>
          </div>
          <div>
            <label>Email</label><br/>
            <input className='input' type='text' placeholder='jackson11@email.com' ref={emailRef} required/><br/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit Question</button>
          </div>
        </form>
        <footer>
          <button className='btn' onClick={(e) => closeModal(e)}>CANCEL</button>
        </footer>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddQuestionModal;