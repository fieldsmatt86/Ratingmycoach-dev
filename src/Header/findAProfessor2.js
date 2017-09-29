import React, { Component } from 'react';
import axios from 'axios';
import AutoComplete from 'react-autocomplete';
import NavBar from './NavBar';


class findAProfessor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text:'',
      schools: [],
      selected: null
    }
    this.updateText = this.updateText.bind(this)

  }

  componentDidMount() {
    axios.get("/api/schools")
    .then(res => {
      console.log(res.data)
      this.setState({
        schools: res.data
      })
    })
  }

  updateText(val) {
    this.setState({
      text: val
    })
  }

  render() {
    return (
    <div id = "bg">
       <NavBar />
      <div className= 'bm'>
            <h1>Find a Professor</h1>
          <div2> search by
<a className='big' href="http://localhost:3000/#/findAProfessor">
          name
          </a>
<a className='big' href="http://localhost:3000/#/findAProfessor2">
          school
          </a>
            </div2>
            <div3>
        <p> Im looking for professors at  
         <AutoComplete
        className= 'bigd'
        getItemValue={(item) => item.name}
        items={this.state.schools}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.name}
          </div>
        }
        value={this.state.text}
        onChange={(e) => this.updateText(e.target.value)}
        onSelect={(val) => this.updateText(val)}
      />
           </p>
        <p> in the <input className= 'input3'/> department.</p>
            </div3>

      <div  href="http://localhost:3000/#/schoolList">
     
      </div>
        <ade2>Search</ade2>
        <h2>CANCEL</h2>
      </div>
      <div className= 'Advertisement'></div>
      <div className= 'Blog'></div>
      <div className= 'Footer'></div>


</div>
    );
  }
}


export default findAProfessor;