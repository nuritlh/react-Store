import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './components/App';
import Chart from './components/chart/Chart';
import Favorites from './components/favorites/Favorites';
import Profile from './components/Profile';
import Notfound from './components/NotFound';

const routing = (
    <Router>
      <div className="ui container" style={{marginTop: '10px'}}> 
        <ul className="ui three item menu">
          <li className="item">
            <Link to="/">Store</Link>
          </li>
          <li className="item">
            <Link to="/chart">Chart</Link>
          </li>
          <li className="item">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/chart" component={Chart} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/profile" component={Profile} />
            <Route component={Notfound} />
      </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.querySelector('#root'));
