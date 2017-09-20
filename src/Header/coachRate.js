import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import Slider2 from './slider2';
import NavBar from './NavBar';
import Comments from './Comments';
import axios from 'axios';
import {Link} from 'react-router-dom';



class coachRate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      professors: [],
      selected: null,
      comments: [],
      ProfessorID: ''
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
    axios.get(`http://localhost:3001/api/ProfessorComments?id=${id}`)
    .then( res => {
      // console.log(res.data)

      this.setState ({
        comments: res.data
      })
    })
  }

    componentDidMount() {
      console.log(this.props)
    axios.get(`http://localhost:3001/api/ProfessorID?name=${this.props.match.params.id}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        ProfessorID: res.data[0].id
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
                  <Link to={"/coachList/" + this.props.match.params.id }>
                    Back to Ratings
                  </Link>
            </div>

            <div className= 'Slider'>
        <Slider2 addComments = {this.addComments}
                  updateText = {this.updateText}
                  professorname = {this.props.match.params.id}
                  ProfessorID = {this.state.ProfessorID}
                  getcomments = {this.getComments}
                  />
            </div>
            </div>
          </div>
      </div>
  
    );
  }
}


export default coachRate;