/** @jest-environment jsdom */
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import EachOutfitCard from '../Related/EachOutfitCard.jsx';

const outfit =  {
  info: {
    category: "Accessories",
    name: "Infinity Stone",
    default_price: "5000000.00"
  },
  styles: {
    results: [
      {
        photos: [
          {
            url: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Space_Stone_VFX.png/revision/latest?cb=20190427012702"
          }
        ]
      }
    ]
  }
}

const index = 0;
const setOutfitsList = () => {};

test('it should render the Questions List', () => {
  render(<EachOutfitCard outfit={outfit} key={index} setOutfitsList={setOutfitsList}/>);
  const EachOutfitCardelement = screen.getByTestId("outfitCard-1");
  expect(EachOutfitCardelement).toBeInTheDocument();
})