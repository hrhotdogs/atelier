import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import {ProductIDContext} from '../Context.jsx';
import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'

const {useEffect, useState, useContext} = React;

const Questions = () => {
  const {currentProductID, setCurrentProductID} = useContext(ProductIDContext);
  const [questions, setQuestions] = useState([])


  function getQuestions() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductID}`, {
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then((res) => setQuestions(res.data.results))
    .catch((err) => console.log('ERROR in get request for questions', err))
  }

  useEffect(() => {
    getQuestions();
  }, [currentProductID])

  function searchQuestions(filteredQuestions) {
    setQuestions(filteredQuestions)
    if(filteredQuestions.length === 0) {
      getQuestions();
    }

  }


  return (
    <div>
      Questions & Answers <br />
      <SearchBar questions={questions} searchQuestions={searchQuestions} getQuestions={getQuestions}/>
      <QuestionsList questions={questions} />
      {/* <AddQuestions/> */}
    </div>
  );
};

export default Questions;
