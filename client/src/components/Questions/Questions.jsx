import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';
import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'
import AddQuestionModal from './AddQuestionModal.jsx'

const { useEffect, useState, useContext } = React;

const Questions = () => {
  const {currentProductID, setCurrentProductID} = useContext(ProductIDContext);
  const [questions, setQuestions] = useState([]);
  const [openQuestionModal, setOpenQuestionModal] = useState(false);
  const [productInfo, setProductInfo] = useState({})
  const productName = productInfo.name;


  function getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductID}`, {
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then((res) => setQuestions(res.data.results))
    .catch((err) => console.log('ERROR in get request for questions', err))
  }

  function postQuestions(question, name, email) {
    axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions`,
    {
      body: question,
      name: name,
      email: email,
      product_id: Number(currentProductID)
    },
    {
      headers: {
        'Authorization': `${TOKEN}`,
      }
    })
    .then(() => console.log('POSTED!'))
    .catch((err) => console.log('ERROR in post request for questions', err))
  }

  useEffect(() => {
    getQuestions();

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentProductID}`, {headers: {Authorization: TOKEN}})
      .then((response) => {setProductInfo(response.data)})
      .catch((err) => {console.log(err)});

  }, [currentProductID])

  function searchQuestions(filteredQuestions) {
    setQuestions(filteredQuestions)
    if(filteredQuestions.length === 0) {
      getQuestions();
    }
  }

  function onClickHandler(e) {
    e.preventDefault();
    setOpenQuestionModal(true);
  }

  function closeModal(e) {
    e.preventDefault();
    setOpenQuestionModal(false);
  }

  return (
    <div className='questionsAndAnswers'>
      Questions & Answers <br />
      <SearchBar questions={questions} searchQuestions={searchQuestions} getQuestions={getQuestions}/>
      <QuestionsList questions={questions} />
      <button onClick={(e) => onClickHandler(e)}>Add Question</button>
      { openQuestionModal ? <AddQuestionModal closeModal={closeModal} productName={productName} postQuestions={postQuestions}/> : null}
    </div>
  );
};

export default Questions;
