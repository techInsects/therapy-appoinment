import React from 'react';
import ReactDOM from 'react-dom';   
import { Switch,BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
//import Login from './components/Login';
// import registration from './components/registration';

// import LoginDoc from './components/doctorLogin';
// import registrationDoc from './components/doctorRegistration';
import serviceWorker from './serviceWorker';


import Home from './components/HomeCompoment';
import contact from './components/contactComponent';
// import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import teletalk from './components/whyteletalkcomponent';
import session from './components/session';
import ebook from './components/ebookComponent';
import activity from './components/activityComponent';
import team from './components/teamComponent';
import mission from './components/missionComponent';
import Slider from './components/slider';
import Login from './components/Login';
import Registration from './components/registration';
import patient from './components/patient';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import doctorLogin from './components/doctorLogin';
import doctor from './components/doctor';
import RegistrationDoc from './components/doctorRegistration';
import Menu from './components/MenuComponent';
import Show from './components/Show';
ReactDOM.render(
    
    <Router>
      <div>
         <Header />  
        <Slider/>
        <Switch> 
          
          <Route exact path='/' component={App} />
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contactus" component={contact}/>
          <Route exact path="/teletalk" component={teletalk}/>
          <Route exact path="/session" component={session}/>
          <Route exact path="/ebook" component={ebook}/>
          <Route exact path="/activity" component={activity}/>
          <Route exact path="/team" component={team}/>
          <Route exact path="/mission" component={mission}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Registration" component={Registration}/>
          <Route exact path="/patient" component={patient}/>
          <Route exact path="/doctor" component={doctor}/>
          <Route exact path="/doctorLogin" component={doctorLogin}/>
          <Route exact path="/RegistrationDoc" component={RegistrationDoc}/>
          <Route path='/show/:id' component={Show} />
         </Switch>
      <Footer /> 
    </div>
  </Router>,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker();
