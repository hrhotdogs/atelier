import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { ProductIDContext } from '../Context.jsx';
import QuestionsList from './QuestionsList.jsx';

const { useEffect, useState, useContext } = React;

const Questions = () => {
  const { currentProductID, setCurrentProductID } =
    useContext(ProductIDContext);
  let [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${currentProductID}`,
        {
          headers: {
            Authorization: `${TOKEN}`,
          },
        }
      )
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.log('ERROR in get request for questions', err));
  }, [currentProductID]);

  return (
    <div>
      Questions & Answers <br />
      SearchBar{/* <SearchBar/> */}
      <QuestionsList questions={questions} />
      {/* <MoreAnsweredQuestions/> */}
      {/* <AddQuestions/> */}
    </div>
  );
};

export default Questions;
