import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Profil from './components/profil';
import Kegiatan from './components/kegiatan';

class App extends Component {
  render() {
    return (
      <div> 
        <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Profil} />
          <Route path="/profil" component={Profil} />
          <Route path="/kegiatan" component={Kegiatan} />
          <Footer/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
