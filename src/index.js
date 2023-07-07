import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import {createGlobalStyle} from 'styled-components'


const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
}
p{
  padding-left:20px
}

`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
);
