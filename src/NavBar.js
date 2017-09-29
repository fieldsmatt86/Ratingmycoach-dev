import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import axios from 'axios';
import {Link} from 'react-router-dom';


class NavBar extends Component {


   handleTextChange(event) {
    this.props.updateTextField(event.target.value)
  }

  
  render() {
    return (
      <div className= 'Nav'>

          <div className= 'NavBar'>

            
            <login> LOG IN / SIGN UP </login>
          

            <Link className='big' to="/">
              <div className= 'big4'>RMC</div>
              <div className= 'big5'>RATING MY COACH</div>
            </Link>
        
            <icon>
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </icon>


          </div>


          <div className= 'NavBar2'>

             <Link className='bigtwo' to="/">
              <div className= 'big4'>RMC</div>
            </Link>
          </div>

      </div>
    );
  }
}


export default NavBar;
