import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Appointment from './components/Appointment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/appointment' component={Appointment} />
      </Switch>
    </Router>
  );
}

export default App;