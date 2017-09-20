import React, { Component } from 'react';
import findASchool from './Header/findASchool';
import {HashRouter as Switch, Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      

      <div className= 'Header'>
      
        <div className = 'ul'>
         <div className= 'switch'>
        <h1> Find what you're looking for. </h1>
        </div>
            <Link className= "front1" to="/findAProfessor/">FIND A <span className='bigger'>coach</span></Link>
             <Link className= "front1" to="/findASchool/">FIND A <span className='bigger'>school</span></Link>
            <Link className= "front1" to="/rateACoach/">RATE A <span className='bigger'>coach</span></Link>
        </div>
      </div>

    );
  }
}


export default Header;
