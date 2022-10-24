/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsList from '../Questions/QuestionsList.jsx';

test('it should render the Questions List', () => {
  render(<QuestionsList questions={questions=[{}]}/>);
  const QuestionsListElement = screen.getByTestId("QuestionsList-questions");
  expect(QuestionsListElement).toBeInTheDocument;
})