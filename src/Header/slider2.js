import React, { Component } from 'react';
import ReactSimpleRange from 'react-simple-range';
import axios from 'axios';
import ToggleButton from 'react-toggle-button'



class Slider2 extends Component {
     constructor(props){
        super(props)
        this.state = {
            ProfessorID: props.ProfessorID,
            reachable: '',
            relatable: '',
            straightforward: '',
            trustworthy: '',
            intense: '',
            expertise: '',
            encouraging: '',
            strengthconditioning: '',
            playagain: '',
            yeargraduated: '',
            comment: ''
        }

this.reachable = this.reachable.bind(this)
this.relatable = this.relatable.bind(this)
this.straightforward = this.straightforward.bind(this)
this.trustworthy = this.trustworthy.bind(this)
this.intense = this.intense.bind(this)
this.expertise = this.expertise.bind(this)
this.encouraging = this.encouraging.bind(this)
this.strengthconditioning = this.strengthconditioning.bind(this)
this.playagain = this.playagain.bind(this)
this.dropDown = this.dropDown.bind(this)
this.comment = this.comment.bind(this)
     }

      reachable(e) {
        console.log(e.value)
        this.setState({
            reachable: e.value,
        })
    }

      relatable(e) {
        console.log(e.value)
        this.setState({
            relatable: e.value,
        })
    }
   
     straightforward(e) {
        console.log(e.value)
        this.setState({
            straightforward: e.value
        })
    }

      trustworthy(e) {
        console.log(e.value)
        this.setState({
            trustworthy: e.value
        })
    }

      intense(e) {
        console.log(e.value)
        this.setState({
            intense: e.value
        })
    }
  
      expertise(e) {
        console.log(e.value)
        this.setState({
            expertise: e.value
        })
    }

      encouraging(e) {
        console.log(e.value)
        this.setState({
            encouraging: e.value
        })
    }

       strengthconditioning(e) {
        console.log(e.alue)
        this.setState({
            strengthconditioning: e.value
        })
    }

        playagain(e) {
        console.log(e.target.value)
        this.setState({
            playagain: e.target.value
        })
        }

        dropDown(e) {
        console.log(e.target.value)
        this.setState({
            yeargraduated: e.target.value
        })
        }

       comment(e) {
        console.log(e.value)
        this.setState({
            comment: e.value
        })
    }
    

  comment(val) {
    this.setState({
      comment: val
    })
  }


   ratethisprofessor() {
      const sliderobject = Object.assign({}, this.state, {
          ProfessorID: this.props.ProfessorID
        })

     axios.post("http://localhost:3001/api/ProfessorRating", sliderobject )
      .then(() => {
        this.setState({
        
            ProfessorID: this.props.ProfessorID,
            reachable: '',
            relatable: '',
            straightforward: '',
            trustworthy: '',
            intense: '',
            expertise: '',
            encouraging: '',
            strengthconditioning: '',
            playagain: '',
            yeargraduated: '',
            comment: ''
        })
        this.props.getcomments(this.props.ProfessorID)
      })
  }

 render() {
    return (

 <div className ='Ratings'>
      <div className='Pep'>
        <num>1</num>
       <p2>REACHABLE </p2>
       <h3> {this.state.reachable} </h3>
         <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.reachable}
            value= {this.state.reachable}
          />
        </div>
      <i className="fa fa-question-circle" aria-hidden="true"></i>

      </div>
    
       <div className='Pep'>
         <num>2</num>
       <p2> RELATABLE </p2>
       <h3> {this.state.relatable} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.relatable}
            value= {this.state.relatable}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>3</num>
       <p2> STRAIGHTFORWARD </p2>
        <h3> {this.state.straightforward}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.straightforward}
            value={this.state.straightforward}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>4</num>
       <p2> TRUSTWORTHY </p2>
        <h3> {this.state.trustworthy}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.trustworthy}
            value={this.state.trustworthy}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>5</num>
       <p2> INTENSE </p2>
        <h3> {this.state.intense}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.intense}
            value={this.state.intense}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>6</num>
       <p2> EXPERTISE </p2>
        <h3> {this.state.expertise}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.expertise}
            value={this.state.expertise}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>7</num>
       <p2> ENCOURAGING </p2>
        <h3> {this.state.encouraging}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.encouraging}
            value={this.state.encouraging}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>8</num>
       <p2> Strength and Conditioning </p2>
        <h3> {this.state.strengthconditioning}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.strengthconditioning}
            value={this.state.strengthconditioning}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>

       <div className='Pep'>
         <num>9</num>
   <p2> WOULD YOU PLAY FOR THIS COACH AGAIN? </p2>
       <p2> {this.state.playagain} </p2>

          <select value={this.state.playagain}  name="cars" onChange={this.playagain}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
    </select>
      
        
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
      
    
  <div className= 'Rep2'>
      <div className = 'Rep5'>
        <num>10</num> 
        <p2 className='t5'> GRADUATION YEAR </p2>
        <p2> {this.state.yeargraduated} </p2>
            <select value={this.state.yeargraduated}  name="cars" onChange={this.dropDown}>
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
    
  
 

        <div className='Rep3'>
         <num>11</num>
        <p2 className='t'> HERE'S YOUR CHANCE TO BE MORE SPECIFIC </p2>
      </div>
  
        <textarea onChange={ (e) => this.comment(e.target.value) }
                       value = {this.state.comment}/>

       <button onClick={ () => this.ratethisprofessor()}>
            Rate this campus 
      </button>

        </div>
     </div>
    
    );
 }

}
export default Slider2;