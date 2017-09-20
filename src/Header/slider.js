import React, { Component } from 'react';
import ReactSimpleRange from 'react-simple-range';
import axios from 'axios';


class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            schoolID: props.schoolID,
            gradyear: '',
            reputation: '',
            locations: '',
            oppurtunities: '',
            facilities: '',
            internet: '',
            food: '',
            clubs: '',
            social: '',
            happiness: '',
            safety: '',
            mycomment: ''
        }

this.dropDown = this.dropDown.bind(this)
this.locations = this.locations.bind(this)
this.reputation = this.reputation.bind(this)
this.oppurtunities = this.oppurtunities.bind(this)
this.facilities = this.facilities.bind(this)
this.internet = this.internet.bind(this)
this.food = this.food.bind(this)
this.clubs = this.clubs.bind(this)
this.social = this.social.bind(this)
this.happiness = this.happiness.bind(this)
this.safety = this.safety.bind(this)
    }
    
    dropDown(e) {
        console.log(e.target.value)
        this.setState({
            gradyear: e.target.value
        })
    }
     reputation(e) {
        console.log(e.value)
        this.setState({
            reputation: e.value
        })
    }

      locations(e) {
        console.log(e.value)
        this.setState({
            locations: e.value
        })
    }

      oppurtunities(e) {
        console.log(e.value)
        this.setState({
            oppurtunities: e.value
        })
    }

      facilities(e) {
        console.log(e.value)
        this.setState({
            facilities: e.value
        })
    }

      internet(e) {
        console.log(e.value)
        this.setState({
            internet: e.value
        })
    }

      food(e) {
        console.log(e.value)
        this.setState({
            food: e.value
        })
    }

      clubs(e) {
        console.log(e.value)
        this.setState({
            clubs: e.value
        })
    }

       social(e) {
        console.log(e.value)
        this.setState({
            social: e.value
        })
    }
       happiness(e) {
        console.log(e.value)
        this.setState({
            happiness: e.value
        })
    }

       safety(e) {
        console.log(e.value)
        this.setState({
            safety: e.value
        })
    }

  mycomment(val) {
    this.setState({
      mycomment: val
    })
  }


  ratethisschool() {
      const sliderobject = Object.assign({}, this.state, {
          schoolID: this.props.schoolID
        })
      console.log(sliderobject)
      axios.post("http://localhost:3001/api/SchoolRating", sliderobject )
      .then(() => {
        this.setState({
            schoolID: this.props.schoolID,
            gradyear: '',
            reputation: '',
            locations: '',
            oppurtunities: '',
            facilities: '',
            internet: '',
            food: '',
            clubs: '',
            social: '',
            happiness: '',
            safety: '',
            mycomment:''
        })
        this.props.getcomments(this.props.schoolID)
      })
  }


 render() {
    return (

 <div className ='Ratings'>
      <div className='Rep'>
        <num>1</num>
       <p2> REPUTATION </p2>
       <h3> {this.state.reputation} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.reputation}
            value= {this.state.reputation}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>2</num>
       <p2> LOCATION </p2>
         <h3> {this.state.locations} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.locations}
            value= {this.state.locations}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>3</num>



       <p2> OPPURTUNITIES </p2>
         <h3> {this.state.oppurtunities} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.oppurtunities}
            value= {this.state.oppurtunities}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>4</num>
       <p2> FACILITIES </p2>
         <h3> {this.state.facilities} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
                onChange={this.facilities}
            value= {this.state.facilities}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>5</num>
       <p2> INTERNET </p2>
         <h3> {this.state.internet} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
                onChange={this.internet}
            value= {this.state.internet}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
      <div className='Rep'>
        <num>6</num>
       <p2> FOOD </p2>
         <h3> {this.state.food} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
                onChange={this.food}
            value= {this.state.food}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>7</num>
       <p2> CLUBS </p2>
         <h3> {this.state.clubs} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
                onChange={this.clubs}
            value= {this.state.clubs}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>8</num>
       <p2> SOCIAL </p2>
         <h3> {this.state.social} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
                onChange={this.social}
            value= {this.state.social}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>9</num>
       <p2> HAPPINESS </p2>
         <h3> {this.state.happiness} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.happiness}
            value= {this.state.happiness}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Rep'>
         <num>10</num>
       <p2> SAFETY </p2>
         <h3> {this.state.safety} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.safety}
            value= {this.state.safety}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>

     <div className= 'Rep2'>
      <div className = 'Rep5'>
        <num>11</num> 
        <p2 className='t5'> GRADUATION YEAR </p2>
        <p2> {this.state.gradyear} </p2>
            <select value={this.state.gradyear}  name="cars" onChange={this.dropDown}>
                <option value="">Please Select</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
            </select>
       
      </div>
        
         <div className = 'Rep3'>
            <num>12</num>
            <p2 className='t5'> HERES YOUR CHANCE TO BE MORE SPECIFIC </p2>
         </div>
             <textarea onChange={ (e) => this.mycomment(e.target.value) }
                       value = {this.state.mycomment}/>
       
         

           <button onClick={ () => this.ratethisschool()}>
             Rate this campus 
           </button>
      
         </div>
      </div>
       
    );
 }

}
export default Slider;