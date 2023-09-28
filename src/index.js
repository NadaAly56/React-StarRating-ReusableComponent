import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StarRating } from './star-rating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating />
  </React.StrictMode>
);

