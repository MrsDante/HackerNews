import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from '../store/fetchPage';

const Header = () => {

  return (
    <header className="header-container">
        <h1 className="header-title">Hacker News</h1>
    </header>
  )
}

export default Header