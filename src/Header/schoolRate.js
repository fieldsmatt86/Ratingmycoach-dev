import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import Slider from './slider';
import NavBar from './NavBar';
import Comments from './Comments';
import axios from 'axios';
import {Link} from 'react-router-dom';



class schoolRate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      schools: [],
      selected: null,
      comments: [],
      SchoolID: ''
    }

    this.addComments = this.addComments.bind(this)
     this.updateText = this.updateText.bind(this)
this.getComments = this.getComments.bind(this)

  }



  updateText(val) {
    this.setState({
      text:val
    })
  }

   addComments() {
    this.setState({
      comments: [...this.state.comments, { text: this.state.text, completed: false }],
      text: '',
    })
  }

  getComments(id) {
    axios.get(`/api/SchoolComments?id=${id}`)
    .then( res => {
      // console.log(res.data)

      this.setState ({
        comments: res.data
      })
    })
  }

    componentDidMount() {
      console.log(this.props)
    axios.get(`/api/SchoolID?name=${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        schoolID: res.data[0].id
      })
      this.getComments(res.data[0].id)
      
    })
  }

  render() {
    console.log(this.props.match.params.id)

    
    return (
      <div>

      <NavBar />   

        <div className = 'too'>

          <div className= 'sidebar'>
          </div>    

          <div className= 'body'>

              <div className = 'SchoolLists'>
                  <h3>{this.props.match.params.id} </h3>
                      <Link to={"/schoolList/" + this.props.match.params.id }>
                        Back to Ratings 
                      </Link>
                </div>

         
              <div className= 'Slider'>
            <Slider addComments = {this.addComments}
                      updateText = {this.updateText}
                      schoolname = {this.props.match.params.id}
                      schoolID = {this.state.schoolID}
                      getcomments = {this.getComments}
                      />
              </div>
              </div>
        </div>
      </div>
  
    );
  }
}


export default schoolRate;