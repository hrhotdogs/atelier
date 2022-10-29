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
      <div className='navBar'><img style={{maxHeight: '60px', marginRight: '20px'}} src='https://media1.giphy.com/media/l1K9Dcy7ww0CW3JHq/giphy.gif?cid=790b76116c485da82fbcdd8af79d303e35627c77d68e823f&rid=giphy.gif&ct=g'></img><div className='logo'><span style={{color: 'green'}}>The </span>Condiment <span style={{color: 'yellow'}}>Table</span></div><img style={{maxHeight: '60px', marginLeft: '20px'}} src='https://media1.giphy.com/media/l1K9Dcy7ww0CW3JHq/giphy.gif?cid=790b76116c485da82fbcdd8af79d303e35627c77d68e823f&rid=giphy.gif&ct=g'></img></div>
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
