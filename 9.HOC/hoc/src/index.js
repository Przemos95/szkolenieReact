import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoComponent from './components/InfoComponent';
import ErrorBoundary from './components/ErrorBoundary';
import WithError from './components/WithError';
import LifecycleComponent from './components/Lifecycle/LifecycleComponent';
import TestComponent from './components/Lifecycle/TestComponent';

ReactDOM.render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
