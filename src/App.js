import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';



function App() {
  return (
    <div>
          <Router>
          <Navbar />
            <Switch>
              <Route exact path='/' exact component={Home}></Route>
            </Switch>
            <Switch>
              <Route exact path='/products/:id/:brandname/:name'>{" "}
                <ProductPage />
              </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
