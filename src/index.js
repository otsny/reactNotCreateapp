import React from 'react';
import { render } from 'react-dom';
import App from './components/app';

const rootEl = document.getElementById('app');

render(<App msg = "asdfq"/>, rootEl);

// if (module.hot) {
//     module.hot.accept();
// }