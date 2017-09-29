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
      happiness: '',
      reputation: '',
      locations: '',
      oppurtunities: '',
      facilities: '',
      internet: '',
      food: '',
      clubs: '',
      social: '',
      safety: '',
      overall: ''
    }

    this.addComments = this.addComments.bind(this)
    this.updateText = this.updateText.bind(this)
    this.getComments = this.getComments.bind(this)
    this.getHappiness = this.getHappiness.bind(this)
    this.getReputation = this.getReputation.bind(this)
    this.getLocations = this.getLocations.bind(this)
    this.getOppurtunities = this.getOppurtunities.bind(this)
    this.getFacilities = this.getFacilities.bind(this)
    this.getInternet = this.getInternet.bind(this)
    this.getFood = this.getFood.bind(this)
    this.getClubs = this.getClubs.bind(this)
    this.getSocial = this.getSocial.bind(this)
    this.getSafety = this.getSafety.bind(this)
    this.getOverall = this.getOverall.bind(this)


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
    axios.get(`/api/happiness?schoolsid=${id}`)
    .then( res => {
      this.setState ({
        happiness: res.data[0].id
      })
    })
  }

   getReputation(id) {
    console.log('this',id)
    axios.get(`/api/reputation?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        reputation: respond.data[0].id
      })
    })
  }

     getLocations(id) {
    console.log('this',id)
    axios.get(`/api/locations?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        locations: respond.data[0].id
      })
    })
  }

     getOppurtunities(id) {
    console.log('this',id)
    axios.get(`/api/oppurtunities?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        oppurtunities: respond.data[0].id
      })
    })
  }

     getFacilities(id) {
    console.log('this',id)
    axios.get(`/api/facilities?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        facilities: respond.data[0].id
      })
    })
  }

     getInternet(id) {
    console.log('this',id)
    axios.get(`/api/internet?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        internet: respond.data[0].id
      })
    })
  }

     getFood(id) {
    console.log('this',id)
    axios.get(`/api/food?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        food: respond.data[0].id
      })
    })
  }

     getClubs(id) {
    console.log('this',id)
    axios.get(`/api/clubs?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        clubs: respond.data[0].id
      })
    })
  }

     getSocial(id) {
    console.log('this',id)
    axios.get(`/api/social?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        social: respond.data[0].id
      })
    })
  }

     getSafety(id) {
    console.log('this',id)
    axios.get(`/api/safety?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        safety: respond.data[0].id
      })
    })
  }

     getOverall(id) {
    console.log('this',id)
    axios.get(`/api/overall?schoolsid=${id}`)
    .then( respond => {
      this.setState ({
        safety: respond.data[0].id
      })
    })
  }

  //   componentDidMount() {
  //     console.log('component mounting')
  //   // axios.get(`/api/SchoolID?name=${this.props.match.params.id}`)
  
  // }

  getComments(id) {
    axios.get(`/api/SchoolComments?id=${id}`)
    .then( res => {
      this.setState ({
        comments: res.data
      })
    })
  }

  componentDidMount() {
      console.log(this.props.match.params.id)
       axios.get(`/api/SchoolID?name=${this.props.match.params.id}`)
    .then(res => {
       this.setState({
        SchoolID: res.data[0].id
      })
       axios.get(`/api/happiness?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        happiness: respond.data[0].avg
      })
       axios.get(`/api/reputation?schoolsid=${res.data[0].id}`)
    .then(respond => {
      this.setState({
        reputation: respond.data[0].avg
      })
       axios.get(`/api/locations?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        locations: respond.data[0].avg
      })
       axios.get(`/api/oppurtunities?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        oppurtunities: respond.data[0].avg
      })
       axios.get(`/api/facilities?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        facilities: respond.data[0].avg
      })
       axios.get(`/api/internet?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        internet: respond.data[0].avg
      })
       axios.get(`/api/food?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        food: respond.data[0].avg
      })
       axios.get(`/api/clubs?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        clubs: respond.data[0].avg
      })
       axios.get(`/api/social?schoolsid=${res.data[0].id}`)
    .then(respond => {
       this.setState({
        social: respond.data[0].avg
      })
       axios.get(`/api/safety?schoolsid=${res.data[0].id}`)
    .then(respond => {
      this.setState({
        safety: respond.data[0].avg,
       
      })
        axios.get(`/api/overall?schoolsid=${res.data[0].id}`)
    .then(respond => {
      this.setState({
        safety: respond.data[0].avg,
       
      })
           
    })    
    })   
   })    
  })     
 })    
  })   
})    
  })  
    })

      // this.getHappiness(respond.data[0].id)
    })
      this.getComments(res.data[0].id)
    })}
     ) }
  
  render() {
    console.log(this.state)
    return (
  <div>
   
       <NavBar />  

            <div className= 'too'>  

                        <div className= 'sidebar'>
                        </div> 

                        <div className= 'body'>

                            <div className= 'SchoolLists'>
                                <h3>{this.props.match.params.id}</h3>
                                <Link to={"/schoolRate/" + this.props.match.params.id}>
                                    Rate This Campus
                                </Link>
                            </div>

                            <div className= 'middle'>
                                <div className= 'p5p6'>
                                        <p5>RATING</p5>
                                        <p6>COMMENT</p6>
                                </div>     

                               <Comments  comments = { this.state.comments } /> 
                            </div>

                        </div>

                        <div className= 'SchoolRating'>
                            <IndividualRating comments = { this.state.comments }
                                              happiness = { this.state.happiness}
                                              reputation = { this.state.reputation}
                                              locations = { this.state.locations}
                                              oppurtunities = { this.state.oppurtunities}
                                              facilities = { this.state.facilities}
                                              internet = { this.state.internet}
                                              food = { this.state.food}
                                              clubs = { this.state.clubs}
                                              social = { this.state.social}
                                              safety = { this.state.safety}
                                              overall = { this.state.overall}
                                               />
                        </div>
            </div>
        

  </div>
    );
  }
}


export default schoolList;
