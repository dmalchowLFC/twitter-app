import React from 'react';
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/favorites" exact component={Favorites} />
          {/* <Route path="/nav" exact component={Nav} /> */}
        </div>
      </Switch>
    </Router>
  )
}


export default App;
