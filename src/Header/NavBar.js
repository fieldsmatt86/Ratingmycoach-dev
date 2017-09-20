import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import axios from 'axios';


class NavBar extends Component {


   handleTextChange(event) {
    this.props.updateTextField(event.target.value)
  }

  
  render() {
    return (
      <div className= 'NavBar'>

         
        <login> LOG IN / SIGN UP </login>
       

        <a className='big' href="http://localhost:3000/#/">
          <div className= 'big4'>RMC</div>
          <div className= 'big5'>RATING MY COACH</div>
        </a>
    
     <icon>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </icon>


      </div>
    );
  }
}


export default NavBar;
