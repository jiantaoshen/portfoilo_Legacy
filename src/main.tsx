import React from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n"; // Import the i18n configuration
import App from './App';


const container = document.getElementById('root');

if (!container) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
