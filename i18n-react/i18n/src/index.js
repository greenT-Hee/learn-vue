import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);