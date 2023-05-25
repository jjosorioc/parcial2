import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CreateRoutes from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <CreateRoutes />
    </BrowserRouter>
  );
}

export default App;
