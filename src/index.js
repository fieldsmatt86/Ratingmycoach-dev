import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import findASchool from './Header/findASchool'
import './stylesheets/main.css'
import rateACoach from './Header/rateACoach.js'
import schoolList from './Header/schoolList.js'
import school from './Header/school.js'
import findAProfessor from './Header/findAProfessor.js'
import findAProfessor2 from './Header/findAProfessor2.js'
import coachList from './Header/coachList.js'
import schoolRate from './Header/schoolRate.js'
import coachRate from './Header/coachRate.js'

ReactDOM.render(
  <Router>
  <div>
    <Switch>
      <Route exact path = "/" component= {App} />
      <Route path = "/findASchool" component= {findASchool} />
      <Route path = "/rateACoach" component= {rateACoach} />
      <Route path = "/findAProfessor" component = {findAProfessor} />
      <Route path = "/findAProfessor2" component = {findAProfessor2} />
      <Route path = "/schoolList/:id" component= {schoolList} />
      <Route path = "/school" component= {school} />
      <Route path = "/coachList/:id" component= {coachList} />
      <Route path = "/schoolRate/:id" component= {schoolRate} />
      <Route path = "/coachRate/:id" component= {coachRate} />

      </Switch>
  </div>
  </Router>
  , document.getElementById('root'));
