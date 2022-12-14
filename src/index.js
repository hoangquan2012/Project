import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Suv from './vehicles/Suv'
import Sedan from './vehicles/Sedan'
import 'bootstrap/dist/css/bootstrap.min.css';
import {worker} from "./mocks/browser"
import Couples from './vehicles/Couples';
worker.start({
  onUnhandledRequest: "bypass",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='suv' element={<Suv />}></Route>
          <Route path='/' element={<Sedan />}></Route>
          <Route path='couples' element={<Couples />}></Route>
          <Route path='maybach' element={<Suv />}></Route>
          <Route path='sport' element={<Sedan />}></Route>
          <Route path='convetible' element={<Couples />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
