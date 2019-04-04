import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/layout/footer';
import NewNavigation from './components/layout/new-navigation';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" component={NewNavigation} />
      <Route path="/" exact component={Home} />
      <Route path="/" component={Footer} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
