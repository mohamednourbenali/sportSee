import React from 'react';
import {Link} from 'react-router-dom';
import "./App.css"

const App = () => {
  return (
    <div className='content'>
      <Link className='link' to={`/user/${18}`}>Cecilia ❤️</Link>
      <Link className='link' to={`/user/${12}`}>Karl 💙</Link>
      <Link className='link' to={`/user/${14}`}>Nour 💙</Link>
    </div>
  );
};

export default App;