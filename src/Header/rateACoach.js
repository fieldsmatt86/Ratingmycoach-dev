import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import axios from 'axios';
import NavBar from './NavBar';
import Blog from './Blog.js';
import {Link} from 'react-router-dom';


class rateACoach extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      Professors: [],
      selected: null
    }
    this.updateText = this.updateText.bind(this)

  }

  componentDidMount() {
    axios.get("/api/Professors")
    .then(res => {
      console.log(res.data)
      this.setState({
        Professors: res.data
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
            <h1>Rate your Coach</h1>

          <AutoComplete
            getItemValue={(item) => item.name}
            items={this.state.Professors}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
            }
            value={this.state.text}
            onChange={(e) => this.updateText(e.target.value)}
            onSelect={(val) => this.updateText(val)}
          />
        
          <Link className="search3" to={"/coachList/" + this.state.text}>
            Search
          </Link>

            <Link className="cancel" to="/">
              <ade3>CANCEL</ade3>
            </Link>
          </div>
    
   </div>

 <div id= "bx">
          <NavBar />
            <div className = "bm">
            <h1>Rate your Coach</h1>

          <AutoComplete
            getItemValue={(item) => item.name}
            items={this.state.Professors}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
            }
            value={this.state.text}
            onChange={(e) => this.updateText(e.target.value)}
            onSelect={(val) => this.updateText(val)}
          />
        
          <Link className="search3" to={"/coachList/" + this.state.text}>
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


export default rateACoach;
