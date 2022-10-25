/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsList from '../Questions/QuestionsList.jsx';

const questions =  [{
  "question_id": 640902,
  "question_body": "why no one asked any questions",
  "question_date": "2022-05-24T00:00:00.000Z",
  "asker_name": "123er",
  "question_helpfulness": 40,
  "reported": false,
  "answers": {
      "5987855": {
          "id": 5987855,
          "body": "THis is an answer with 5 photos",
          "date": "2022-09-02T00:00:00.000Z",
          "answerer_name": "Dav",
          "helpfulness": 5,
          "photos": [
              "http://res.cloudinary.com/ase-boogy-cloudinator/image/upload/v1662130545/FEC_BSB/zirt9xwquxpkhufpjnch.jpg",
              "http://res.cloudinary.com/ase-boogy-cloudinator/image/upload/v1662130545/FEC_BSB/tnktzovdndypn8wlwmil.jpg",
              "http://res.cloudinary.com/ase-boogy-cloudinator/image/upload/v1662130545/FEC_BSB/lkegimdofqrfgieeodb0.jpg",
              "http://res.cloudinary.com/ase-boogy-cloudinator/image/upload/v1662130545/FEC_BSB/jzk4mz5ot55i5lvnby2q.jpg",
              "http://res.cloudinary.com/ase-boogy-cloudinator/image/upload/v1662130545/FEC_BSB/hthnghrezlpaara4pzlm.jpg"
          ]
      },
      "5988732": {
          "id": 5988732,
          "body": "lalala",
          "date": "2022-10-19T00:00:00.000Z",
          "answerer_name": "jack234",
          "helpfulness": 2,
          "photos": []
      },
      "5988869": {
          "id": 5988869,
          "body": "Don't worry, I'll ask a question. Right after I answer this question.",
          "date": "2022-10-21T00:00:00.000Z",
          "answerer_name": "Answerer",
          "helpfulness": 0,
          "photos": []
      }
  }
}]

test('it should render the Questions List', () => {
  render(<QuestionsList questions={questions}/>);
  const QuestionsListElement = screen.getByTestId("QuestionsList-questions");
  expect(QuestionsListElement).toBeInTheDocument();
})
