import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dreams from './containers/Dreams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DreamNew from './containers/DreamNew';
import Home from './components/Home';
import ChosenDreams from './containers/ChosenDreams';
import Search from './containers/Search';
import DreamUpdate from './containers/DreamUpdate';

class App extends React.Component {
  // constructor() {
  //   super()
  // }
  
  render() {
  
    return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Home />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Dreams } />
          <Route exact path="/dreams" component={ Dreams } />
          <Route exact path="/dreams/new" component={ DreamNew } />
          <Route exact path="/dreams/chosen" component={ ChosenDreams } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/dreams/:id/update" component={ DreamUpdate } />
        </Switch>
        <Footer />
      </Router>
      </header>
    </div>
  );
  }
}
export default App;