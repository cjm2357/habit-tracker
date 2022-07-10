import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Habits from './components/habits';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabits from './components/simpleHabits';

ReactDOM.render(
  // 생략가능 js에 use strict 같은 느낌
  <React.StrictMode>   
    {/* <App /> */}
    <SimpleHabits></SimpleHabits>
    {/* <Habits /> */}
  </React.StrictMode>,
  //컴포넌트를 연결
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
