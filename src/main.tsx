// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'   // ← add this import

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>               // ← wrap App in BrowserRouter
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'  // ← Make sure this import is there for Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
  )