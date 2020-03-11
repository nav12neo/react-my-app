import React from 'react';
import Navigation from './GlobalComponents/Navigation/Navigation';
import Header from './GlobalComponents/Header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import Events from './pages/events/Events';
import Home from './Home';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

function App() {

  return (
        <div className="App">
            <Header />
          <div className="App-row">
            <Navigation />
            <div className="App-main-container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" >
                        <Dashboard />
                    </Route>
                    <Route path="/events" >
                        <Events />
                    </Route>
                </Switch>
            </div>
          </div>
          <footer className="App-footer">
            made with react
          </footer>
        </div>
  );
}

export default App;
