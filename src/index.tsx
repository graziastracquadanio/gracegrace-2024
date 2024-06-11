import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/zilla-slab/400.css';
import '@fontsource/zilla-slab/600.css';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
