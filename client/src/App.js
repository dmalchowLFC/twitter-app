import React from 'react';
import './App.css';
import Home from './pages/Home'
import Search from './pages/Search'
import Favorites from './pages/Favorites'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <div className="App">
              <Route path="/" exact component={Home} />
              <Route path="/search" exact component={Search} />
              <Route path="/favorites" exact component={Favorites} />
            </div>
          </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
