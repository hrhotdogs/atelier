
/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReviewList from '../Ratings/ReviewList.jsx';
import ReviewTile from '../Ratings/ReviewTile.jsx';

const reviews =  [{
    "review_id": 1277133,
    "rating": 1,
    "summary": "dfghd",
    "recommend": true,
    "response": null,
    "body": "sdvsfavfssddsljkfndaskjgnaskdjnvdkfjnbvdklfjnbkdlfnbvfdb",
    "date": "2022-10-24T00:00:00.000Z",
    "reviewer_name": "f",
    "helpfulness": 0,
    "photos": []
},
{
    "review_id": 1277132,
    "rating": 1,
    "summary": "dsvvs",
    "recommend": true,
    "response": null,
    "body": "sdvsfavfssddsljkfndaskjgnaskdjnvdkfjnbvdklfjnbkdlfnbvfdb",
    "date": "2022-10-24T00:00:00.000Z",
    "reviewer_name": "sad",
    "helpfulness": 0,
    "photos": []
}];

describe('ReviewList', () => {

  render(<ReviewList listOfReviews={reviews} listValue={'set_one'} setListValue={()=> {}} />);

  const ReviewListElement = screen.getByTestId('review-report')

  it('renders ReviewList component', () => {
    expect(ReviewListElement).toBeInTheDocument()
  });


});
