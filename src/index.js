import React from 'react';
import ReactDOM from 'react-dom/client';

//Import naszego modułu z pliku 'application.jsx"
import { Application } from './application';
import {View} from './compontents/pokemon/view.jsx';
import {ToggleButton} from './compontents/pokemon/toggle_button.jsx';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application/>
    {/* {<View/>} */}
  </React.StrictMode>
);