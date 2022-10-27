import React from 'react';
import Axios from 'axios';
import { TOKEN } from '../../../config.js';
import { ProductIDProvider } from './Context.jsx';
import { StyleIDProvider } from './StyleContext.jsx';
import Overview from './Overview/Overview.jsx';
import Related from './Related/Related.jsx';
import Questions from './Questions/Questions.jsx';
import Ratings from './Ratings/Ratings.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  // Render components with context (global state)
  return (
    <div className='app'>
      <ProductIDProvider>
        <StyleIDProvider>
          <Overview />
          <Related />
        </StyleIDProvider>
        <Questions />
        <Ratings />
      </ProductIDProvider>
    </div>
  );
};

export default App;
