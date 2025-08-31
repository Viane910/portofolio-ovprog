// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
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

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
