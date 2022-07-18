import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import Game from './pages/Game';
import Main from './pages/Main';


ReactDOM.render(
    <React.StrictMode>
        <Game userId={1}>{1}</Game>
        {/* <Main/> */}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
