import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dreams from './containers/Dreams';
import DreamNew from './containers/DreamNew';
import DreamUpdate from './containers/DreamUpdate';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  
    return ( // this is what the whole page looks like, with all the components rendered
    <div className="App">
      <header className="App-header">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Dreams } />
          <Route exact path="/dreams" component={ Dreams } />
          <Route exact path="/dreams/new" component={ DreamNew } />
          <Route exact path="/dreams/:id/update" component={ DreamUpdate } />
        </Switch>
        <Footer />
      </Router>
      </header>
    </div>
  );
}

export default App;