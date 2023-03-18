import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainDev } from './App';
import { NavBar } from './Component/Nav';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <NavBar />
  <MainDev />
</>);



