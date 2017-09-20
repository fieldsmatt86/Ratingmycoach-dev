import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import Slider from './slider';
import NavBar from './NavBar';
import Comments from './Comments';
import IndividualRating from './IndividualRating'
import axios from 'axios';
import {Link} from 'react-router-dom';



class schoolList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      schools: [],
      selected: null,
      comments: [],
      SchoolID: '',
      happiness: ''
    }

    this.addComments = this.addComments.bind(this)
    this.updateText = this.updateText.bind(this)
    this.getComments = this.getComments.bind(this)
    this.getHappiness = this.getHappiness.bind(this)
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

  getHappiness(id) {
    console.log('this',id)
    axios.get(`http://localhost:3001/api/happiness?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        happiness: respond.data[0].id
      })
    })
  }

  //   componentDidMount() {
  //     console.log('component mounting')
  //   // axios.get(`http://localhost:3001/api/SchoolID?name=${this.props.match.params.id}`)
  
  // }

  getComments(id) {
    axios.get(`http://localhost:3001/api/SchoolComments?id=${id}`)
    .then( res => {
      this.setState ({
        comments: res.data
      })
    })
  }

  componentDidMount() {
      console.log(this.props.match.params.id)
    axios.get(`http://localhost:3001/api/SchoolID?name=${this.props.match.params.id}`)
    .then(res => {
      axios.get(`http://localhost:3001/api/happiness?schoolsid=${res.data[0].id}`)
    .then(respond => {
      console.log(respond.data)
      console.log('september')
      this.setState({
        happiness: respond.data[0].avg,
        SchoolID: res.data[0].id
      })
      this.getHappiness(respond.data[0].avg)
    })
      this.getComments(res.data[0].id)
    })
  }

  render() {
    console.log(this.state)
    return (
  <div>
   
       <NavBar />  

            <div>  
                        <div className= 'sidebar'>
                        </div> 

                        <div>

                            <div>
                                <h3>{this.props.match.params.id}</h3>
                                <Link to={"/schoolRate/" + this.props.match.params.id}>
                                    Rate This Campus
                                </Link>
                            </div>

                            <div>
                                <div className= 'p5p6'>
                                        <p5>RATING</p5>
                                        <p6>COMMENT</p6>
                                    </div>     

                            <Comments  comments = { this.state.comments } /> 
                            </div>

                        </div>

                <IndividualRating comments = { this.state.comments }
                                  happiness = { this.state.happiness} />

            </div>
        

  </div>
    );
  }
}


export default schoolList;

  <div>
        
       <NavBar />  
  
        <div className= 'too'> 
            
             <div className= 'sidebar'>
             </div> 
                   
               <div className= 'body'>

                    <div className = 'SchoolLists' >
                        <div className = 'schheader'>
                            
                        </div>

                        <div className = "SchoolRating">
                            <IndividualRating comments = { this.state.comments }
                                              happiness = { this.state.happiness} />
                        </div>
                    </div>
                  

                  

             </div>
         </div>
  </div>