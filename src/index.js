import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// Render to HTML
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <App tab="home" />
  </Router>,
);