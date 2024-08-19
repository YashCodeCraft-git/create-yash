import React from 'react'
import ReactDom from 'react-dom/client'
// import Profile from './components/Profile.jsx';
import { App } from './App.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Profile /> */}
  </React.StrictMode>
);
