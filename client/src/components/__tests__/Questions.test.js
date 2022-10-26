/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Questions from '../Questions/Questions.jsx';

test('it should render the Questions component', () => {
  render(<Questions/>);
  const QuestionsElement = screen.getByTestId("Questions-parent");
  expect(QuestionsElement).toBeInTheDocument();
})