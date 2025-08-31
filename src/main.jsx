// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HashRouter } from 'react-router-dom';
import './index.css';

// comp
import './ui/header-comp';
import './component/quote-comp';
import './component/certificate-comp';
import './component/websiteSect-comp';
import './component/gameSect-comp';
import './component/otherSect-comp';
import './ui/mobile-comp';
import './ui/footer-comp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
