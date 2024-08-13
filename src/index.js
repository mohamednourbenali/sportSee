import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './pages/Home/App.js';
import reportWebVitals from './reportWebVitals';
import Profil from './pages/Profil/Profil.js';
import Header from './components/Header/Header.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import Error from './pages/Error/Error.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <div className='home'>
      <div className='header'>
        <Header />
      </div>
      <div className='body'> 
        <div className='side-bar'>
          <Sidebar />
          <div className="copiright">
            <p>copiright SportSee 2020</p>
          </div>
        </div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/user/:userId" element={<Profil />} />
            <Route path='*' element={<Error/>} />
          </Routes>
      </div> 
    </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
