import './App.css';
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
//const HomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
