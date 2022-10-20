import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import css from '../../style.css';

const AddQuestionModal = ({ closeModal }) => {

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

  return ReactDOM.createPortal(
    <div style={modalBackground} onClick={(e) => closeModal(e)}>
      <div style={modalContainer}>
        <div>
          <h1>Ask Your Question</h1>
          <h2>About the [Product Name Here]</h2>
        </div>
        <form>
          <input></input><br/>
          <input></input><br/>
          <input></input><br/>
        </form>
        <footer>
          <button onClick={(e) => closeModal(e)}>CANCEL</button>
        </footer>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default AddQuestionModal;