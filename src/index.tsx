import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageWithForm } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageWithForm />
  </React.StrictMode>
);

