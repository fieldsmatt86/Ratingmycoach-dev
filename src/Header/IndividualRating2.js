import React, {Component} from 'react';
import axios from 'axios';
import AutoComplete from 'react-autocomplete';


class IndividualRating2 extends Component {
 constructor(props) {
    super(props)
    this.state = {
      comments: [],
    }

 }


  render(){
    const items = this.props.comments.map((comment, i) => (
<div className= 'comments' key= {i}>
    <div className='ratecomment'>
        <div className= 'userrating'>  
            <div className="com">
                <p4>{comment.reachable}</p4>
                <h4>reputation</h4>
            </div>
            <div className="com">
                <p4>{comment.relatable}</p4>
                <h4>location</h4>
            </div>
            <div className="com">
                <p4>{comment.straightforward}</p4>
                <h4>oppurtunities</h4>
            </div>
            <div className="com">
                <p4>{comment.trustworthy}</p4>
                <h4>facilities</h4>
            </div>
            <div className="com">
                <p4>{comment.intense}</p4>
                <h4>internet</h4>
            </div>
            <div className="com">
                <p4>{comment.expertise}</p4>
                <h4>food</h4>
            </div>
            <div className="com">
                <p4>{comment.encouraging}</p4>
                <h4>clubs</h4>
            </div>
            <div className="com">
                <p4>{comment.strengthconditioning}</p4>
                <h4>social</h4>
            </div>
            <div className="com">
                <p4>{comment.playagain}</p4>
                <h4>happiness</h4>
            </div>
            <div className="com">
                <p4>{comment.yeargraduated}</p4>
                <h4>safety</h4>
            </div>
        </div>
    </div>
</div>
    ))

    

    return (
      <div className="schoolavg">
         <h1> Lets see what the people have to say! </h1>   
             <div className="com2">
                <p4></p4>
                <h4>Overall Score</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>reputation</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>location</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>oppurtunities</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>facilities</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>internet</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>food</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>clubs</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>social</h4>
            </div>
            <div className="com2">
                <p4>{this.props.happiness}</p4>
                <h4>happiness</h4>
            </div>
            <div className="com2">
                <p4></p4>
                <h4>safety</h4>
            </div>
      </div>
  
    );
  }
}

export default IndividualRating2;