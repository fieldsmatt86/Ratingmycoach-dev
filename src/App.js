import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar';
import Header from './Header';
import Advertisement from './Advertisement.js';
import Blog from './Blog';
import Footer from './Footer';
import Stories from './Stories';


class App extends Component {
  constructor (){
    super()
  this.state = {
    textField: ""
  }
  this.updateTextField = this.updateTextField.bind(this)
  }
  updateTextField(val) {
    this.setState({
      textField: val
    })
  }

  render() {
    return (
      <div id="bg" >
        <NavBar updateTextField={this.updateTextField}
                val = { this.state.textField } />
      <div className="bt">
        <Header />
        <Blog />
       
      </div>
        <Footer />
        <Stories />
        <Footer />
      </div>
    );
  }
}

export default App;
