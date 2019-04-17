import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Footer from './components/layout/footer';
import LandingPageNavigation from './components/layout/landingPageNav';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" component={LandingPageNavigation} />
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/" component={Footer} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
