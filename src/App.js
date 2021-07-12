import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dreams from './containers/Dreams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DreamNew from './containers/DreamNew';
import Home from './containers/Home';

class App extends React.Component {
  // constructor() {
  //   super()
  // }
  
  render() {
    return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/dreams/new" component={ DreamNew } />
        </Switch>
        <Dreams />
        <Footer />
        </Router>
      </header>
    </div>
  );
  }
}
export default App;