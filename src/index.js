import React from 'react';
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client';


import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="f24dc392-cb29-4195-b843-cba029f4920b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
document.getElementById('root')
);