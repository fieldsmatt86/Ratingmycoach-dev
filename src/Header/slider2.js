import React, { Component } from 'react';
import ReactSimpleRange from 'react-simple-range';
import axios from 'axios';
import ToggleButton from 'react-toggle-button'



class Slider2 extends Component {
     constructor(props){
        super(props)
        this.state = {
            rate: '',
            difficulty: '',
            takeagain: '',
            forcredit: '',
            textbookuse: '',
            attendance: '',
            hotness: '',
            mycomment: '',
            mygrade: '',
            ProfessorID: props.ProfessorID
        }

this.forcredit = this.forcredit.bind(this)
this.takeagain = this.takeagain.bind(this)
this.coursecode = this.coursecode.bind(this)
this.rate = this.rate.bind(this)
this.difficulty = this.difficulty.bind(this)
this.textbookuse = this.textbookuse.bind(this)
this.attendance = this.attendance.bind(this)
this.hotness = this.hotness.bind(this)
this.mycomment = this.mycomment.bind(this)
this.mygrade = this.mygrade.bind(this)
     }

      takeagain(e) {
        console.log(e.target.value)
        this.setState({
            takeagain: e.target.value,
        })
    }

      forcredit(e) {
        console.log(e.target.value)
        this.setState({
            forcredit: e.target.value,
        })
    }
   
     coursecode(e) {
        console.log(e.value)
        this.setState({
            coursecode: e.value
        })
    }

      rate(e) {
        console.log(e.value)
        this.setState({
            rate: e.value
        })
    }

      difficulty(e) {
        console.log(e.value)
        this.setState({
            difficulty: e.value
        })
    }
  
      textbookuse(e) {
        console.log(e.target.value)
        this.setState({
            textbookuse: e.target.value
        })
    }

      attendance(e) {
        console.log(e.target.value)
        this.setState({
            attendance: e.target.value
        })
    }

       hotness(e) {
        console.log(e.target.value)
        this.setState({
            hotness: e.target.value
        })
    }
       mycomment(e) {
        console.log(e.value)
        this.setState({
            mycomment: e.value
        })
    }
        mygrade(e) {
        console.log(e.target.value)
        this.setState({
            mygrade: e.target.value
        })
        }

  mycomment(val) {
    this.setState({
      mycomment: val
    })
  }


   ratethisprofessor() {
      const sliderobject = Object.assign({}, this.state, {
          ProfessorID: this.props.ProfessorID
        })

     axios.post("http://localhost:3001/api/ProfessorRating", sliderobject )
      .then(() => {
        this.setState({
            rate: '',
            difficulty: '',
            takeagain: '',
            forcredit: '',
            textbookuse: '',
            attendance: '',
            hotness: '',
            mycomment: '',
            mygrade: '',
            ProfessorID: this.props.ProfessorID
        })
        this.props.getcomments(this.props.ProfessorID)
      })
  }

 render() {
    return (

 <div className ='Ratings'>
      <div className='Pep'>
        <num>1</num>
       <p2>COURSE CODE </p2>
       <h3> </h3>
      <i className="fa fa-question-circle" aria-hidden="true"></i>

      </div>
    
       <div className='Pep'>
         <num>2</num>
       <p2> RATE YOUR PROFESSOR </p2>
       <h3> {this.state.rate} </h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.rate}
            value= {this.state.rate}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>3</num>
       <p2> LEVEL OF DIFFICULTY </p2>
        <h3> {this.state.difficulty}</h3>
        <div className='rep2'>
          <ReactSimpleRange className='heck'
            label
            vertical
            min={1}
            max={5}
            sliderSize={15}
            thumbSize={20}
            onChange={this.difficulty}
            value={this.state.difficulty}
          />
        </div>
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>4</num>
   <p2> WOULD YOU TAKE THIS PROF AGAIN? </p2>
       <p2> {this.state.takeagain} </p2>

          <select value={this.state.takeagain}  name="cars" onChange={this.takeagain}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
    </select>
      
        
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>5</num>
       <p2> WAS THIS CLASS TAKEN FOR CREDIT </p2>
        <p2> {this.state.forcredit}</p2>

         <select value={this.state.forcredit}  name="cars" onChange={this.forcredit}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
    </select>
       
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
      <div className='Pep'>
        <num>6</num>
       <p2> TEXTBOOK USE </p2>
       <p2> {this.state.textbookuse} </p2>

        <select value={this.state.textbookuse}  name="cars" onChange={this.textbookuse}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
        </select>
        
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>7</num>
       <p2> ATTENDANCE </p2>
       <p2>{this.state.attendance} </p2>
        <select value={this.state.attendance}  name="cars" onChange={this.attendance}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
    </select>
   
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
       <div className='Pep'>
         <num>8</num>
       <p2> HOTNESS </p2>
       <p2>{this.state.hotness}</p2>
        <select value={this.state.hotness}  name="cars" onChange={this.hotness}>
                <option value="">Please Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
    </select>
        
      
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>
          <div className = 'Pep'>
        <num>9</num> 
        <p2 className='t5'> GRADE RECIEVED </p2>
        <p2> {this.state.mygrade} </p2>
         <select value={this.state.mygrade}  name="cars" onChange={this.mygrade}>
                <option value="">Please Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
        </select>
         <i className="fa fa-question-circle" aria-hidden="true"></i>

      </div>
     <div>
 

        <div className='Rep3'>
         <num>10</num>
        <p2 className='t'> HERE'S YOUR CHANCE TO BE MORE SPECIFIC </p2>
         
       <i className="fa fa-question-circle" aria-hidden="true"></i>
      </div>

      <textarea className="text5" />
      
       <button onClick={ () => this.ratethisprofessor()}>
            Rate this campus 
      </button>

        </div>
     </div>
    
    );
 }

}
export default Slider2;