import React, { Component } from 'react';

class school extends Component {
  render() {
    return (
    <div>
      <div className= 'school'>
        <h1>  RATE MY COACH </h1>
        <input type= 'text' results='0'/>
        <social> </social>
        <login> LOG IN / SIGN UP </login>
      </div>
      <div className= 'findASchoolHeader'>
      <h1>Find your school</h1>
      <input className= 'i2' type='text' results='0'/>
      <a className='big' href="http://localhost:3000/#/schoolResults">
        <ad2>FIND A <span className='bigger'>school</span></ad2>
      </a>
      </div>
      <div className= 'Advertisement'></div>
      <div className= 'Blog'></div>
      <div className= 'Footer'></div>


</div>
    );
  }
}


export default school;
