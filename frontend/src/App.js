import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Shared/Header';
import DashboardPage from './components/Dashboard/index';
import ProductPage from './components/Product/product';
import CategoryPage from './components/Category/index';
import InsertCategoryPage from './components/Category/insert';
import routes from './routes';


class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <div>
            {routes.map(route => (
                <Route exact path={route.path} component={route.component}></Route>
            ))}
          
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
