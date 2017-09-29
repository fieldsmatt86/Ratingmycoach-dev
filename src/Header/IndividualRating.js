import React, {Component} from 'react';
import axios from 'axios';
import AutoComplete from 'react-autocomplete';


class IndividualRating extends Component {
 constructor(props) {
    super(props)
    this.state = {
      comments: [],
      happiness: '',
      reputation: '',
      location: '',
      oppurtunities: '',
      facilities: '',
      internet: '',
      food: '',
      clubs: '',
      social: '',
      safety: ''
    }

 }


  render(){
    const items = this.props.comments.map((comment, i) => (
<div className= 'comments' key= {i}>
    <div className='ratecomment'>
        <div className= 'userrating'>  
            <div className="com">
                <p4>{comment.reputation}</p4>
                <h4>reputation</h4>
            </div>
            <div className="com">
                <p4>{comment.locations}</p4>
                <h4>location</h4>
            </div>
            <div className="com">
                <p4>{comment.oppurtunities}</p4>
                <h4>oppurtunities</h4>
            </div>
            <div className="com">
                <p4>{comment.facilities}</p4>
                <h4>facilities</h4>
            </div>
            <div className="com">
                <p4>{comment.internet}</p4>
                <h4>internet</h4>
            </div>
            <div className="com">
                <p4>{comment.food}</p4>
                <h4>food</h4>
            </div>
            <div className="com">
                <p4>{comment.clubs}</p4>
                <h4>clubs</h4>
            </div>
            <div className="com">
                <p4>{comment.social}</p4>
                <h4>social</h4>
            </div>
            <div className="com">
                <p4>{comment.happiness}</p4>
                <h4>happiness</h4>
            </div>
            <div className="com">
                <p4>{comment.safety}</p4>
                <h4>safety</h4>
            </div>
        </div>
    </div>
</div>
    ))

    

    return (
      <div className="schoolavg">
         <h1> School Averages </h1>   
          
            <div className="com2">
                <p4>{this.props.reputation}</p4>
                <h4>reputation</h4>
            </div>
            <div className="com2">
                <p4>{this.props.locations}</p4>
                <h4>location</h4>
            </div>
            <div className="com2">
                <p4>{this.props.oppurtunities}</p4>
                <h4>oppurtunities</h4>
            </div>
            <div className="com2">
                <p4>{this.props.facilities}</p4>
                <h4>facilities</h4>
            </div>
            <div className="com2">
                <p4>{this.props.internet}</p4>
                <h4>internet</h4>
            </div>
            <div className="com2">
                <p4>{this.props.food}</p4>
                <h4>food</h4>
            </div>
            <div className="com2">
                <p4>{this.props.clubs}</p4>
                <h4>clubs</h4>
            </div>
            <div className="com2">
                <p4>{this.props.social}</p4>
                <h4>social</h4>
            </div>
            <div className="com2">
                <p4>{this.props.happiness}</p4>
                <h4>happiness</h4>
            </div>
            <div className="com2">
                <p4>{this.props.safety}</p4>
                <h4>safety</h4>
            </div>
      </div>
  
    );
  }
}

export default IndividualRating;