import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import Slider2 from './slider2';
import NavBar from './NavBar';
import Comments from './Comments';
import axios from 'axios';
import {Link} from 'react-router-dom';
import IndividualRating2 from './IndividualRating2';

class coachList extends Component {
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
    axios.get(`/api/ProfessorComments?id=${id}`)
    .then( res => {
      this.setState ({
        comments: res.data
      })
    })
  }

    componentDidMount() {
      console.log(this.props)
    axios.get(`/api/ProfessorID?name=${this.props.match.params.id}`)
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

          <div className= 'too'> 

            <div className= 'sidebar'>
            </div> 

            <div className= 'body'>

              <div className = 'SchoolLists' >
                <h3>{this.props.match.params.id} </h3>
                 <Link to={"/coachRate/" + this.props.match.params.id}>
                  Rate This Campus
                </Link>
              </div>
           
          <div className='middle'>
            <div className= 'p5p6'>
                <p5>RATING</p5>
                <p6>COMMENT</p6>
            </div>         
              <Comments  comments = { this.state.comments } />   
              </div>

            </div>

                        <div className= 'SchoolRating'>
                            <IndividualRating2 comments = { this.state.comments }
                                              happiness = { this.state.happiness} />
                        </div>

          </div>
  </div>
    );
  }
}


export default coachList;
