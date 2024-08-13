// src/App.js
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import "./App.css"
import { getUser } from '../../services/api.js';
import Profil from '../Profil/Profil.js';

const App = () => {
  const [user, setUser] = useState(null);
  const userId = 12; // Id de l'utilisateur à récupérer

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userId);
        setUser(userData);
        console.log("user : ", user.data.userInfos.firstName)
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };
    fetchUser();
  }, [userId]);
  return (
    <div className='content'>
      <Link className='link' to={`/user/${18}`}>Cecilia ❤️</Link>
      <Link className='link' to={`/user/${12}`}>Karl 💙</Link>
    </div>
  );
};

export default App;