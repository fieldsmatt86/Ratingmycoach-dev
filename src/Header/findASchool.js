import React, { Component } from 'react';
import axios from 'axios';
import AutoComplete from 'react-autocomplete';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import Blog from './Blog.js';


class findASchool extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text:'',
      schools: [],
      selected: null
    }
    this.updateText = this.updateText.bind(this)

  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/schools")
    .then(res => {
      console.log(res.data)
      this.setState({
        schools: res.data
      })
    })
  }

  updateText(val) {
    this.setState({
      text: val
    })
  }

  render() {
    return (
    <div>
    <div id= "bz">
       <NavBar />
        <div className = "bm">
            <h1>Find your school</h1>
    
            <AutoComplete
             getItemValue={(item) => item.name}
              items={this.state.schools}
              renderItem={(item, isHighlighted) =>
               <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
               {item.name}
               </div>
               }
               value={this.state.text}
               onChange={(e) => this.updateText(e.target.value)}
               onSelect={(val) => this.updateText(val)}
              />
     
              <Link className="search3" to={"/schoolList/" + this.state.text}>
                Search
              </Link>

               <Link className="cancel" to="/">
                <ade3>CANCEL</ade3>
               </Link>
        </div>
              
        </div>

          <div className= "bx">
       <NavBar />
        <div className = "bm">
            <h1>Find your school</h1>
    
            <AutoComplete
             getItemValue={(item) => item.name}
              items={this.state.schools}
              renderItem={(item, isHighlighted) =>
               <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
               {item.name}
               </div>
               }
               value={this.state.text}
               onChange={(e) => this.updateText(e.target.value)}
               onSelect={(val) => this.updateText(val)}
              />
     
              <Link className="search3" to={"/schoolList/" + this.state.text}>
                Search
              </Link>

               <Link className="cancel" to="/">
                <ade3>CANCEL</ade3>
               </Link>
        </div>
              
        </div>
      </div>
    );
  }
}


export default findASchool;
