import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom'
import {Page} from './components/Page.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
