import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dreams from './containers/Dreams';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DreamNew from './containers/DreamNew';
import Header from './components/Header';
// import ChosenDreams from './containers/ChosenDreams';
import DreamUpdate from './containers/DreamUpdate';

// import { connect } from 'react-redux';
// import { fetchDreams } from './actions/dreamsActions';

class App extends React.Component {
// I added this
//   constructor() {
//     super();

//     this.state = {
//       id: '',
//       name: '',
//       description: '',
//       chosen: false,
//       term: ""
//     }
//   }
//   componentDidMount(){
//     this.props.fetchDreams()
// }
// up to this

  render() {
  
    return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Dreams } />
          <Route exact path="/dreams" component={ Dreams } />
          <Route exact path="/dreams/new" component={ DreamNew } />
          {/* <Route exact path="/dreams/chosen" component={ ChosenDreams } /> */}
          <Route exact path="/dreams/:id/update" component={ DreamUpdate } />
        </Switch>
        <Footer />
      </Router>
      </header>
    </div>
  );
  }
}

// const mapStateToProps = state => {
//   return {
//       dreams: state,
//   }
// }
// export default connect(mapStateToProps, { fetchDreams })(App)
export default App;